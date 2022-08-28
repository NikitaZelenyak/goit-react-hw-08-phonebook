


import { RiContactsBook2Fill } from 'react-icons/ri';
import { IoIosPersonAdd } from 'react-icons/io';
import { Link,HeaderStyled,Nav,Text,Btn,Wrapper,NameText } from './Header.styled';
import { logOutUser } from 'redux/auth/authSlice';
import { useLogOutMutation } from 'redux/auth/authApi';
import { useDispatch } from 'react-redux';





export const Header = ({ data }) => {

    const [logout] = useLogOutMutation();
const dispatch =useDispatch();

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
                <NameText>{ data && data.name}</NameText>
                <Btn type="button"
                    
              onClick={handlerLog}
                >
                    Logout
               
                </Btn>
                 
            </Wrapper>
    </HeaderStyled>
 )
}

 

                 
              