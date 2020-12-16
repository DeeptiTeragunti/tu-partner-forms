import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './resetpass.css';
import EmailIcon from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';

function Resetpassword() {
    return (
        <div className="container">
            <p></p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png" alt = "lgo" className="logo"></img>
            <h2>Reset Password </h2>
            
            
            
            <TextField
        //className={classes.margin}
        id="input-with-icon-textfield"
        label="EmailS"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      
      />
          
            <p>
              
            </p>
            <Button variant="contained" color="primary" href="#contained-buttons">
                  Next
                </Button>

      <div className ="condition">
        By using our services, you are agree with our
        <p>terms and conditions</p>
        </div>
        </div>
    )
}

export default Resetpassword;
