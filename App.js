import logo from './logo.svg';
import './App.css';
import Forms1 from './Forms1.js';
import { BrowserRouter, Link,Switch,Route } from 'react-router-dom';
 import Loginform from './Loginform.js';
 import Createaccount from './Createaccount.js';
import Resetpassword from './Resetpassword';
import SignIn from './Sign-in';
import Sign_up from './Sign_up';
import Email_verification from './Email_verification';
import Passwordreset from './Passwordreset';


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
      <Route path="/Email_verification">
     
        <Email_verification/>
     
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
