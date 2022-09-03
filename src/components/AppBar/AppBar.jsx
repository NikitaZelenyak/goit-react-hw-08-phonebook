import { UserMenu } from "components/UserMenu/UserMenu"
import { AuthMenu } from "components/AuthMenu/AuthMenu"
import { Header, Link } from "./AppBar.styled"
import { useSelector } from "react-redux"


export const AppBar = () => {
    const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn);

    return (
           <Header>
      
            <Link to='/'>ContactsBook</Link>
              
            <>{isLoggedIn ? <UserMenu></UserMenu> : <AuthMenu></AuthMenu>}</>
   
            </Header>
    )
}