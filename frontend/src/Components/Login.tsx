import React, { useState } from 'react';
import axios from 'axios';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import usericon from '../assets/cover-img.png';
import ResponsiveAppBar from './ResponsiveAppBar';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const newUser = {
    email: user.email,
    password: user.password,

  };

    try {
      const response = await axios.post('http://localhost:3000/user/login', newUser);

      if(response.data.email === user.email && response.data.password===user.password){
        const token= response.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
        alert('Login successful!');
      }
    } catch (error) {
       alert('Your credentials are not correct!');
    }
  };

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    
    <div className="signup-contents">
      {/* <ResponsiveAppBar /> */}
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" >
          <CssBaseline />
          <Grid
            item
            xs={12} 
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${usericon})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              width: '100%', // Adjust for smaller devices
              padding: '5%',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '80vh',
                width: '100%', // Adjust for smaller devices
                padding: '10%',
                marginTop: '5%'
              }}>
              
              <Typography component="h1" variant="h5" sx={{mt: -7, mr: 10}}>
                Sign in
              </Typography>
              <div className='fields-contents' style={{marginRight: '15%'}}>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, mb: -2}}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  value={user.password}  
                  onChange={handleChange}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                >
                  Sign In
                </Button>
                <Grid container sx={{mt:0.5}}>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                {/* <Copyright sx={{ mt: 5 }} /> */}
              </Box>
              </div>
              
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}


