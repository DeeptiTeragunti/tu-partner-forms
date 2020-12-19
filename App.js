import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Link,Switch,Route } from 'react-router-dom';

import Resetpassword from './Resetpassword';
import SignIn from './Sign-in';
import Sign_up from './Sign_up';
import Email_verification from './Email_verification';
import Passwordreset from './Passwordreset';
import Albumpage from './Albumpage';
import Home from './Home';
import Main from './Main';
import PasswordResetsuccess from './PasswordResetsuccess';
import Accountsuccess from './Accountsuccess';
import Basic from './Basic';
import  Mobile from "./Mobile";
import Basic2 from './Basic2';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import { MobileStepper } from '@material-ui/core';
import MobileVerification from './MobileVerification';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
     
      
      {/* <Link to="/Createaccount">
          
        </Link>
     
      
      <Createaccount/>
      <Link to ="/Resetpassword">
        <Resetpassword/>
      </Link> */}
     {/* <Link to ="/Sign-in">
        <SignIn/>
      </Link>  */}
      
      <Switch>
      <Route path="/Home">
            <Home />
           </Route>
           <Route path="/Main">
            <Main />
           </Route>
          <Route path="/Sign_up">
            <Sign_up />
           </Route>
<Route path="/SignIn">
           
        <SignIn/>
  </Route>
      <Route path="/Passwordreset">
      <Link to ="/Passwordreset">
        <Passwordreset/>
      </Link> 
      </Route>
      <Route path="/Albumpage">
            <Albumpage />
           </Route>
      <Route path="/Email_verification">
     
        <Email_verification/>
     
      </Route>
      <Route path="/PasswordResetsuccess">
            <PasswordResetsuccess />
           </Route>
           <Route path="/MobileVerification">
            <MobileVerification />
           </Route>
           <Route path="/Accountsuccess">
            <Accountsuccess />
           </Route>
           <Route path="/Basic">
            <Basic />
           </Route>
           <Route path="/Basic2">
            <Basic2 />
           </Route>
      <Route path="/Sign_up">


      <Link to ="/Sign_up">
        <Sign_up/>
      </Link>
      </Route>
           </Switch>
    
    </div>

    </BrowserRouter>
  );
}

export default App;
