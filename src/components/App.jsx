
import { AddContactForm } from "../pages/AddContactForm/AddContactForm";
import { Route, Routes, } from "react-router-dom";
import { useState } from "react";
import { Container } from "./App.styled";
import { ContactsList } from "../pages/ContactList/ContactList";
import { Modal } from "./Modal/Modal";
import { AppBar } from "./AppBar/AppBar";
import PrivateRouter from "./Naviagtion/PrivateRouter";
import PublicRouter from "./Naviagtion/PublicRouter";
import { useFetchCurrentUserQuery } from "redux/auth/authApi"
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "redux/auth/authSlice";
import { useEffect } from "react";
import LogIn from "pages/LogInForm/LogInForm";
import Register from "pages/RegistrationForm/RegistrationForm";
import { HomePage } from "pages/HomePage/HomePage";





export const App = () => {

     
   const [isOpen, seIisOpen] = useState(false);
   const [idContact, setIdContact] = useState(null);

   const token = useSelector(state => state.authSlice.token);

   const { data:currentUser,isFetching } = useFetchCurrentUserQuery( );

   const dispatch = useDispatch()
   
   useEffect(() => {
      if (token === null) {
         return
         
      }
  
      dispatch(fetchUser(currentUser));

   }, [currentUser, dispatch, token]);

   
   return (

      <Container >
         {!isFetching &&  <><AppBar></AppBar>
          
         {isOpen && <Modal idContact={idContact}  onClose={seIisOpen}></Modal>}
             
            <Routes>
                 
               <Route path="/" element={<HomePage></HomePage>}></Route>
               <Route path="/login" element={<PublicRouter restricted><LogIn/></PublicRouter>}></Route>           
               <Route path="/register" element={<PublicRouter restricted><Register /></PublicRouter>}></Route>            
               <Route path="/contacts" element={<PrivateRouter><ContactsList seIisOpen={seIisOpen} setIdContact={setIdContact} /></PrivateRouter>}> </Route>            
               <Route path='/create' element={<PrivateRouter><AddContactForm /></PrivateRouter>}></Route>
             
            </Routes> </>
       
           }
            
      </Container>
    )
}



