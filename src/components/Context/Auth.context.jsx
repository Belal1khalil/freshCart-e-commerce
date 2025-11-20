import { createContext, useEffect, useState } from "react";
import { verfiyToken } from "../../services/auth-service";



 export const AuthContext = createContext(null);


 export default function AuthProvider({children}) {

  const [token , setToken] = useState(localStorage.getItem("userToken") || sessionStorage.getItem("userToken"));
  const [isAuthenicated , SetisAuthenicated] = useState(false);
  const [isUserInfo , SetIsUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")));
  const [iserror , SetIsError] = useState(null)
  const [isLoading , setIsLoading] = useState(true)
  

  useEffect(()=>{
   const checkAuth = async ()=> {
     try {
      setIsLoading(true)
     const response = await verfiyToken();

     if(response.success) {
      setIsLoading(false)
        SetisAuthenicated(true)
        SetIsUserInfo(response.data.decoded)
        localStorage.setItem("userInfo" , JSON.stringify(response.data.decoded))
     }
   } catch (error) {
    setIsLoading(false)
     SetIsError(error)
   }
   };


   checkAuth();
  } ,[token])

   function Logout() {
    setToken(null);
    SetIsUserInfo(null)
    SetisAuthenicated(false)
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    sessionStorage.removeItem("userToken");
   }

    return <AuthContext.Provider value={{ token ,isLoading, setToken, Logout , isAuthenicated , isUserInfo }}>
        {children}
    </AuthContext.Provider>
 }