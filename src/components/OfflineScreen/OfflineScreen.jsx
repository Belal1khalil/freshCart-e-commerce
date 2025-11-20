import { useOnlineStatus } from '../../hooks/UseOnlineStatus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal } from '@fortawesome/free-solid-svg-icons'

export default function OfflineScreen({ children }) {
   const isOnline =  useOnlineStatus()

  if(!isOnline) {
    return (
   <>
     {children}
      <div className='fixed right-8 bottom-8 bg-red-200 text-red-500 px-3 py-2 rounded-md '>
      <p>
          <FontAwesomeIcon icon={faSignal} className="me-2" />
         Check Your Internet Connection
      </p>
    </div>
   </>
   );
  }
  return (
   <>
   {children}
   </>
  )
}
