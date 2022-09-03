import { Link,Nav } from "./AuthMenu.styled"
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const AuthMenu = () => {
    return (
        <Nav>
            <Link to='/login'><LoginIcon/></Link>
            <Link to='register'><ExitToAppIcon/></Link>
        </Nav>
     
    )
}