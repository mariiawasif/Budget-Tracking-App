// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import usericon from '../assets/cover-img.png';
// import ResponsiveAppBar from './ResponsiveAppBar';

// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export default function SignInSide() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <div className="signup-contents">
//       <ThemeProvider theme={defaultTheme}>
//         <Grid container component="main" >
//           <CssBaseline />
//           <Grid
//             item
//             xs={false}
//             sm={4}
//             md={7}
//             sx={{
//               backgroundImage: `url(${usericon})`,
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               height: '100vh', 
//               width: '5vw', 
//               padding: '5%',
//             }}
//           />
//           <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//             <Box
//               sx={{
//                 my: 8,
//                 mx: 4,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 height: '80vh',
//                 width: '35vw',
//                 padding: '10%',
//                 marginTop: '5%'
//               }}>
              
//               <Typography component="h1" variant="h5" sx={{mt: -9}}>
//                 Sign in
//               </Typography>
//               <div className='fields-contents'>
//               <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   name="firstName"
//                   autoComplete="firstName"
//                   autoFocus
//                   sx={{ mb: 1 }} 
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="lastName"
//                   autoFocus
//                   sx={{ mb: 0 }} // Reduce bottom margin
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"

//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="cpassword"
//                   label="Confirm Password"
//                   type="cpassword"
//                   id="cpassword"
//                   autoComplete="current-password"

//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="budgetLimit"  
//                   label="Budget Limit" 
//                   name="budgetLimit" 
//                   autoComplete="off" 
//                   type="number" 
//                   inputProps={{ min: 0 }} 
//                 />

//                 <FormControlLabel
//                   control={<Checkbox value="remember" color="primary" />}
//                   label="Remember me"
//                   sx={{ mb: -3 }} // Reduce bottom margin
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Sign In
//                 </Button>
//                 <Grid container>
//                   <Grid item xs>
//                     <Link href="#" variant="body2">
//                       Forgot password?
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link href="#" variant="body2">
//                       {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//                 {/* <Copyright sx={{ mt: 5 }} /> */}
//               </Box>
//               </div>
              
//             </Box>
//           </Grid>
//         </Grid>
//       </ThemeProvider>
      
//       </div>
    
    
//   );
// }


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="signup-contents">
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
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  autoFocus
                  sx={{ mb: 1 }} 
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                  autoFocus
                  sx={{ mb: 0 }} 
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"

                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="cpassword"
                  label="Confirm Password"
                  type="cpassword"
                  id="cpassword"
                  autoComplete="current-password"

                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="budgetLimit"  
                  label="Budget Limit" 
                  name="budgetLimit" 
                  autoComplete="off" 
                  type="number" 
                  inputProps={{ min: 0 }} 
                />

                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  sx={{ mb: -3 }} // Reduce bottom margin
                /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
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


