// import React from 'react'

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
// import './email.css'
// // function Copyright() {
// //   return (
// //     <Typography variant="body2" color="textSecondary" align="center">
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://material-ui.com/">
// //         Your Website
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(7),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '80%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function Email_verfication() {
//   const classes = useStyles();

//   return (
     
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//       <Grid container>
//           <Grid item xs={11}>
//       <p className="end" justify="center">
//           <h2>Email verification</h2>
//           Already have an account<strong>Login</strong>
//         </p>
//         </Grid>
// </Grid>
//         <Typography classname="h1" component="h1" variant="h5">
//           <p></p>
//           <p>

//           </p>
//           <p>

//           </p>
//         </Typography>

//         <form className={classes.form} noValidate>
//         <Grid container spacing={2}>
//             <Grid item xs={11} >
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           </Grid>
//           <Grid item xs={11}>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             NEXT
//           </Button>
//           </Grid>
            
            
              
//             </Grid>
          
//         </form>
//         <p className="end" justify="center">
//           <small>By using our service you agree with our
//           <strong>terms and conditions</strong></small>
//         </p>
//       </div>
//       {/* <Box mt={8}>
//         <Copyright />
//       </Box> */}
//     </Container>
   
//   );
// }
import Link from '@material-ui/core/Link';
import { fade, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// function OTPBox = () => {
//     const [otp, setOtp] = useState(new Array(4).fill(""));

//     const handleChange = (element, index) => {
//         if (isNaN(element.value)) return false;

//         setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

//         //Focus next input
//         if (element.nextSibling) {
//             element.nextSibling.focus();
//         }
//     };
import Container from '@material-ui/core/Container';
import "./verify.css";
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

 function Email_verfication(){
  const classes = useStyles();
    return (
      <Container  className="con" maxWidth="xs" >
      <CssBaseline /> 
            <div className="row">
                <div className="end1" >
                    <h3>Email verification</h3>
                    </div>
                    
                    <div className="link">
              <Link href="#" variant="body2" >
                {"Don't have an account? Login"}
              </Link>
            </div>
                    {/* {otp.map((data, index) => { */}
                        {/* return ( */}
                          <p>Enter the OTP sent to your email</p>
                            <TextField
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                //key={index}
                                //value={data}
                                //onChange={e => handleChange(e.target, index)}
                                //onFocus={e => e.target.select()}
                            />
                        {/* );
                    })} */}

                   {/* <p>OTP Entered - {otp.join("")}</p> */}
                    
                    <p>
                         <p
                            className="buter"

                            //onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Not Recieved?
                            <strong>Resend</strong>
                        </p> 
                        <button
                            className="but1" justify="right"
                            //onClick={e =>
                              //  alert("Entered OTP is " + otp.join(""))
                            //}
                        >
                            Verify OTP
                        </button>
                    </p>
                </div>
           
             
            </Container>
    );
};


export default  Email_verfication;




