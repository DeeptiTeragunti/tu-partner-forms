import { Container } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import './main.css';
import SignIn from './Sign-in';

function Main() {
    return (
        <div className="main_c">
            <div className="cheeta">
                <div className="header">
                    <img className="logo">
                       
                    </img>
                    <div className="option1" >
                      <p>SIGN-IN</p>  
                      <p className="p2">SIGN-UP</p>
                    </div>
                    
                </div>
                <div className="side">
                 <p>Welcome as a Partner</p>
                 <div className="inn">
                     <p>Great things are never done by one but by a team" We welcome you from the bottom of our hearts to partner with us on this wonderful journey to showcase our properties and services to guests across the World. We will make them experience The Wild as it has been never before and accomplish something extraordinary.</p>
                 </div>   
                 <Link to="/Sign_up">
                 <button className="bu" >
                    REGISTER
                </button>
                </Link>
                </div>
               
            
            </div>
            
           <div className="blue ">
             
             </div>
        </div>
        ////stop div here 
        
        
        
    )
}

export default Main
