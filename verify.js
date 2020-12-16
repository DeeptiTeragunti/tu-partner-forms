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
import './signin.css';
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

export default function SignIn() {
  const classes = useStyles();

  return (
    
    <Container  className="con" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
      
          <div   >
           <h2>Email verification</h2>
          </div>

        <div className="head">

         SIGN IN
        </div>
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>
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
          <Grid item xs={11}>
            
          <Button className="but"
            type="submit"
            fullWidth
           variant="contained"
           color="primary"
          >
            Sign In
          </Button>
          </Grid>
          
          
            <div  item className="fg"  >
              <Link href="#" variant="body2">
               <p> Forgot password?</p>
              </Link>
            </div>
            <div  justify="right">
              <Link href="#" variant="body2" >
                {"Don't have an account? Sign Up"}
              </Link>
            </div>


            <div  item className="fg2"  >
           <small>By using our service you agree with our
           <strong>terms and conditions</strong>
            </small>
            </div>
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
