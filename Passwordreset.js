import React from 'react'

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
import './resetpass.css'
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

export default function Passwordreset() {
  const classes = useStyles();

  return (
     
    <Container component="main" className="con" maxWidth="xs">
      <CssBaseline />
      <Grid>
      <div className="end" justify="left">
          <h2> Password Reset</h2>
          <p>Already have an account 
          <strong>Login</strong></p>
        </div>
        </Grid>
          <div>
              <div>
                  
              </div>
          </div>
    
     
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>
            <Grid item xs={10} >
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
          <Grid item xs={10} >
          <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name=" password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          </Grid>
          <Grid item xs={10}>
          <Button className="but"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            NEXT
          </Button>
         </Grid>
       </Grid>
        </form>
        <p className="end2" justify="center">
          <small>By using our service you agree with our</small>
          <strong>terms and conditions</strong>
        </p>
    
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}



