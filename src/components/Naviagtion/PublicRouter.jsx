
import {  Navigate} from "react-router-dom"
import { useSelector } from "react-redux";



export default function PublicRouter  ({  children, restricted=false, }) {
    const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;

    
    return shouldRedirect ? <Navigate to='/contacts' />  : children  ; 
}
