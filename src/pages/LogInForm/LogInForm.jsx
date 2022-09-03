

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RegistrationLink } from './LinkToRegistration';
import toast, { Toaster } from 'react-hot-toast';

import { logInUser } from 'redux/auth/authSlice';
import { useDispatch,  } from 'react-redux';
import { useLogInMutation } from "redux/auth/authApi";


import CircularProgress from '@mui/material/CircularProgress';




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/NikitaZelenyak">
        Zeleniak Nikita
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LogIn() {

     const [logIn,{status}] = useLogInMutation();
  const dispatch = useDispatch();


  const handleSubmit =  async  (event) =>{
    event.preventDefault();
      const data = new FormData(event.currentTarget);
      const logData = {
          email: data.get('email'),
          password: data.get('password'),
      }
  try {
    await logIn(logData).then(({ data }) =>  dispatch(logInUser(data)));
  }
  catch (error) {
    toast.error(`Please try one more time`);
  }
    

  };


  return (
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
          {status === 'uninitialized' && <Avatar sx={{ m: 1, bgcolor: '#d00e0eea' }}>
            <LockOutlinedIcon />
          </Avatar>}

          {status === 'pending' && <Box sx={{ display: 'flex', m: 1 }}>
            <CircularProgress />
          </Box>}


          <Typography component="h1" variant="h5">
            Login
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password" />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>

            <> <RegistrationLink>


            </RegistrationLink></>


          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider></>
  );
}



