import {  Navigate} from "react-router-dom"
import { useSelector } from "react-redux";



export default function PrivateRouter  ({  children}) {
    const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn);

    
    return isLoggedIn ? children : <Navigate to='/login' />;
}
