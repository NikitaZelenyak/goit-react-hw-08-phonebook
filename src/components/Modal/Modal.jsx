
import * as React from 'react';
import { useGetContactsQuery,useUpdateContactMutation } from "redux/contacts/contactsApi";
import { useEffect, } from "react";




import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ModalBox, Overlay,Title } from "./Modal.styled";
import { useState } from 'react';






const theme = createTheme();

export const Modal = ({ idContact, onClose }) =>{

   


    const { data: contacts } = useGetContactsQuery();


    const getContactById = (contacts,idContact) => {
        return contacts && contacts.find(contact => contact.id === idContact);
    }
    const contactById = getContactById(contacts, idContact);

    const [name, setName] = useState(contactById.name);
    const [number, setNumber] = useState(contactById.number);


    const [updateContact] = useUpdateContactMutation()


 
    useEffect(() => {

        const  handleKeydown = e => {

            if (e.code === 'Escape') {
                onClose(prevIsOpen=> !prevIsOpen)

        }
    }

        window.addEventListener('keydown', handleKeydown);
        return () => {
            
            window.removeEventListener('keydown', handleKeydown)

        }
        
    }, [onClose])


 const handlerBackdropClose = (e)=> {
        if (e.currentTarget === e.target) {
            onClose(prevIsOpen=> !prevIsOpen)
        }
}

    
    const handlerUpdate = async (event) => {
  
        event.preventDefault();
      
      const nameValue =   event.target.elements.name.value;
      const numberValue = event.target.elements.number.value ;
        setName(nameValue);
        setNumber(numberValue);
        const contactData = {
            name,
            number,
            id: idContact,
       }
        try {
           
           await updateContact(contactData);
           
       } catch (error) {
        
       } 
        
        onClose(prevIsOpen => !prevIsOpen);

    }



  return (

      <Overlay  onClick={handlerBackdropClose}>
          <ModalBox>
                <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                          sx={{
                              backgroundColor: '#ffffff',
                              padding: 2,
                              borderRadius:2,
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >

                          <Title>
           
                              Edit contact 
        
                          </Title>


                    <Box component="form"
                        onSubmit={handlerUpdate}
                        noValidate sx={{ mt: 1 }}>
                              <TextField
                                  defaultValue={name}
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus />

                              <TextField
                                   defaultValue={number}
                            margin="normal"
                            required
                            fullWidth
                            name="number"
                            label="Number"
                            type="number"
                            id="number" />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Edit
                        </Button>



                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
          </ModalBox>
         </Overlay>
  );
}



