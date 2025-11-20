import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";
import { Navigate, useLocation } from "react-router";
import Loading from "../Loading/Loading";


export default function ProtectedRoute({children}) {
 const { isAuthenicated , token , isLoading   } = useContext(AuthContext);
  const location = useLocation();
 if(isLoading) {
   return <Loading/>
 }


 if(!isAuthenicated) {
    return <Navigate to={"/login"} state={{from: location.pathname}} />
 } else {
  return children;
 }
    
}
