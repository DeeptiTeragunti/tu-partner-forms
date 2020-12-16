

// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import './signsup.css';


// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function Sign_up() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//       <img  className ="image_logo"src="https://i.pinimg.com/originals/52/e2/20/52e2200218b632d536d998e7c0500008.png " alt=""></img>
        
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={11} >
//               <TextField 
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={11} >
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={11}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={11}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={11}>
//             <Button  className="b1"
//             type="submit"
//              fullWidth
//             variant="contained"
           
//             color="blue"
//             className={classes.submit}
           
//           >
//             NEXT
//           </Button>
//             </Grid>
//           </Grid>
          
//           <Grid container justify="center">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Already have an account?
//                 <strong>SignUp</strong> 
//               </Link>
//             </Grid>
//           </Grid>
//           <p className="end" >
//           <small>By using our service you agree with our
//           <strong className="yo">terms and conditions</strong>
//           </small>
//         </p>
//         </form>
//       </div>
//       <Box mt={5}>
       
//       </Box>
//     </Container>
//   );
// }

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './signsup.css';
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Sign_Up() {
  const classes = useStyles();

  return (
    
    <Container  className="con" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
      
          <div  className ="image_logo " >

          </div>

        <div className="head">

         SIGN UP
        </div>
        <form className={classes.form} noValidate>
        <Grid container spacing={0.5}>
            <Grid item xs={11} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Fullname"
            label="Full name"
            type="text"
            autoComplete="name"
            autoFocus
          />
          </Grid>
          <Grid item xs={11} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          </Grid>
            <Grid item xs={11} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          </Grid>
          <Grid item xs={11} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label=" Reset Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          </Grid>
          <Grid item xs={11}>
            
          <Button className="but"
            type="submit"
            fullWidth
           variant="contained"
           color="primary"
          >
           NEXT
          </Button>
          </Grid>
          
            <div  justify="right">
              <Link href="#" variant="body2" >
                {"Don't have an account? Sign In"}
              </Link>
            </div>


            <p  item className="fg2" >
           <small>By using our service you agree with our
           <strong>terms and conditions</strong>
            </small>
            </p>
            </Grid>
            </form>
        
            </div>
            
        
            
           
            
          
        
        </Container>
          
           
            
  
     
          // <div item className="fg3"  >
          // <small>By using our service you agree with our
          // <strong>terms and conditions</strong>
          //  </small>   
          //  </div> 
    

  );
}
