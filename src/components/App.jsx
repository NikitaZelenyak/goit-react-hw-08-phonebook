
import { AddContactForm } from "../pages/AddContactForm/AddContactForm";
import { Route, Routes, } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Header/Header";
import { Container } from "./App.styled";
import { ContactsList } from "../pages/ContactList/ContactList";
import { Modal } from "./Modal/Modal";
import PrivateRouter from "./UserMenu/PrivateRouter";
import PublicRouter from "./UserMenu/PublicRouter";
import { useFetchCurrentUserQuery } from "redux/auth/authApi"
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "redux/auth/authSlice";
import { useEffect } from "react";
import SignIn from "pages/LogInForm/LogInForm";
import Register from "pages/RegistrationForm/RegistrationForm";




export const App = () => {

     
   const [isOpen, seIisOpen] = useState(false);
   const [idContact, setIdContact] = useState(null);

   const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn);
   // const token = useSelector(state => state.authSlice.token);


   // const skip =  token === null ? true : false;

//   {   skip}
   const { data:currentUser,isFetching } = useFetchCurrentUserQuery( );

   console.log(currentUser);
   const dispatch = useDispatch()
   
   useEffect(() => {
     currentUser && dispatch(fetchUser(currentUser));

   }, [currentUser, dispatch,  ]);




   


 
   
   return (

      <Container >
         {!isFetching &&  <>
            { isLoggedIn && <Header currentUser={currentUser}></Header> }
              
   
 
         {isOpen && <Modal idContact={idContact}  onClose={seIisOpen}></Modal>}
           
         <Routes>
            <Route path="/" element={<PublicRouter restricted><SignIn  /></PublicRouter>}></Route>
             <Route path="/register" element={<PublicRouter restricted><Register /></PublicRouter>}></Route>
            <Route path="/contacts" element={<PrivateRouter><ContactsList seIisOpen={seIisOpen} setIdContact={setIdContact}  /></PrivateRouter>}> </Route>
            <Route path='/create' element={<PrivateRouter><AddContactForm/></PrivateRouter>}></Route>
           
            
           
         </Routes> </>
       
           }
        

     
           
            
      </Container>
    )
}



