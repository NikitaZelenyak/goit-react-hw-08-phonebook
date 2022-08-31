

import { useRegisterMutation } from "redux/auth/authApi";
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authSlice';
import { LinkCustom } from "./RegistrationForm.styled";
 


  

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState } from "react";


const theme = createTheme();

export default function Register() {
    const [isCheckboxChecked, setICheckboxChecked] = useState(true)
   

    const dispatch = useDispatch();
    const [addUser,{status}] = useRegisterMutation();


    const handlerChecked = (event) => {
        if (event.target.checked) {

          setICheckboxChecked(false);
        }

        if (!event.target.checked) {
          setICheckboxChecked(true);
     }
      
    };



  const handleSubmit = async (event) => {
    event.preventDefault();
      const data = new FormData(event.currentTarget);
      const userData ={
          email: data.get('email'),          
          password: data.get('password'),
          name: data.get('name'),
      }

      


      try {
   
          await addUser(userData).then(({data}) => dispatch(registerUser(data)));
        
      }
      catch (error) {
    
          console.log(error);

      }
  
  };

    return (
      
        <ThemeProvider theme={theme}>
            
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


                    <Avatar sx={{ m: 1, bgcolor: '#79d00eea' }} variant="rounded">
                        {status === "fulfilled" ? <HowToRegIcon/> :  <AssignmentIcon />}
                           
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Registration
                        </Typography>
                        <Typography component="p">
                            Please add your info
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password" />
                            <FormControlLabel
                                control={<Checkbox onClick={handlerChecked} value="agree" name={'checkbox'} color="primary" />}
                                label="Agree with privacy police" />
                            <Button

                                disabled={isCheckboxChecked}
                                type="submit"
                                fullWidth
                                variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            
                            >
                                Sign In
                        </Button>
                       
           
                      
             <LinkCustom to='/'>Back to login</LinkCustom>
          
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
  );
}