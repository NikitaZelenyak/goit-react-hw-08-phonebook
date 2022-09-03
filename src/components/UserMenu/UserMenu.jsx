
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { IoIosPersonAdd } from 'react-icons/io';
import { Link,Nav,Btn,Wrapper,NameText } from './UserMenu.styled';
import { logOutUser } from 'redux/auth/authSlice';
import { useLogOutMutation } from 'redux/auth/authApi';
import { useDispatch, useSelector} from 'react-redux';
import { useFetchCurrentUserQuery } from 'redux/auth/authApi';

export const UserMenu = () => {

   
  const [logout] = useLogOutMutation();
  const dispatch = useDispatch();
 

   const token = useSelector(state => state.authSlice.token);
   const skip = token === null ? true : false;
   const { data:currentUser, } = useFetchCurrentUserQuery("",{skip} );

  
   const handlerLog = () => {
      logout();
      dispatch(logOutUser())
   }
    return (
     
      <>
        <Nav>
        <Link to='/contacts'><RiContactsBook2Fill size={24} /></Link>
        <Link to='/create'><IoIosPersonAdd size={24} /></Link>
      </Nav>
        <Wrapper>
          <AccountCircleIcon sx={{ color: ' #093d9d;' }} />
          <NameText>Hello,{currentUser && currentUser.name}</NameText>
          <Btn type="button"
            onClick={handlerLog}>
            <LogoutIcon />
          </Btn>
        </Wrapper></>

 )
}

 

                 
              