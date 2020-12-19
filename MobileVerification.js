import Link from '@material-ui/core/Link';
import { fade, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
function MobileVerification() {
    return (
        <Container  className="con" maxWidth="xs" >
        <CssBaseline /> 
              <div className="row">
                  <div className="end1" >
                      <h3>Phone verification</h3>
                      </div>
                      
                      <div className="link">
                <Link href="#" variant="body2" >
                  {"Don't have an account? Login"}
                </Link>
              </div>
                      {/* {otp.map((data, index) => { */}
                          {/* return ( */}
                            <p>Enter the OTP sent to your Number</p>
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
    )
}

export default MobileVerification
