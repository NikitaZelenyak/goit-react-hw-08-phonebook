
import * as React from 'react';
import { useAddContactMutation,useGetContactsQuery } from "redux/contacts/contactsApi";

import { Title } from './AddContactForm.styled';



import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import toast, { Toaster } from 'react-hot-toast';


 








const theme = createTheme();

export const  AddContactForm =() =>{


const [ addContact ] = useAddContactMutation();
    const { data: contacts,isFetching, } = useGetContactsQuery();

   const  resetForm = (event) => {
     
       event.target.elements.number.value = '';
       event.target.elements.name.value = '';
   }

    const getInfoContact = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const contactData = {
          name: data.get('name'),
          number: data.get('number'),
      }
        try {
           
            const checkOnIncludes = contacts.some(
            contact => contact.name.toLowerCase() === contactData.name.toLowerCase());     
      
            if (checkOnIncludes) {
            return toast.error(`This name: "${contactData.name}" already have in list`)
            };
             await addContact(contactData   );
              
               toast.success(`Contact added`)
             
        } catch (error) {
            
            toast.error(`${error}`)
        }
 
        resetForm(event);
         
    }

 



    return (
      
          <><Title> 
            Add contact info
        </Title>
            <><Toaster></Toaster><ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >



                    <Box component="form"
                        onSubmit={getInfoContact}
                        noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="number"
                            label="Number"
                            type="number"
                            id="number" />

                        <Button
                            disabled={isFetching}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add
                        </Button>



                    </Box>
                </Box>

            </Container>
        </ThemeProvider></></>
  );
}



