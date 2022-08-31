
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { IoIosPersonAdd } from 'react-icons/io';
import { Link,HeaderStyled,Nav,Text,Btn,Wrapper,NameText } from './Header.styled';
import { logOutUser } from 'redux/auth/authSlice';
import { useLogOutMutation } from 'redux/auth/authApi';
import { useDispatch } from 'react-redux';





export const Header = ({ currentUser }) => {

    const [logout] = useLogOutMutation();
    const dispatch = useDispatch();

   const handlerLog = () => {
      logout();
      dispatch(logOutUser())
   }
    return (
        <HeaderStyled>
        <Text>ContactsBook</Text>
        <Nav>
        <Link to='/contacts'><RiContactsBook2Fill size={24} /></Link>
        <Link to='/create'><IoIosPersonAdd size={24} /></Link>

              
            </Nav>
            <Wrapper>
                 <AccountCircleIcon sx={{ color: '#4886d6' }}/>
                <NameText>Hello,{ currentUser && currentUser.name}</NameText>
                <Btn type="button"
                    
              onClick={handlerLog}
                >
               <LogoutIcon/>
                </Btn>
                 
            </Wrapper>
    </HeaderStyled>
 )
}

 

                 
              