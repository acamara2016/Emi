import logo from './logo.svg';
import './App.css';
import BackgroundImage from './pages/components/imgs/green_chalk.jpg';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
 import SignIn from './pages/SignIn';
 import SignUp from './pages/SignUp';
import { AuthProvider } from './pages/components/Authentication';
import PasswordReset from './pages/PasswordReset';
import BottomAppBar from './pages/BottomAppBar';
import SplashScreen from './pages/components/splash/index';
import ParticlesBg from 'particles-bg';
import Editor from './pages/EditNote';


function App(){
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  const user = null; 

    return (
      <>
      {loading === false ?(
        <AuthProvider 
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
         
         <Router>
           <Switch>
             <Route exact path="/sign-in" component={SignIn} />
             <Route exact path="/sign-up" component={SignUp} />
             <Route exact path="/edit" component={Editor}/>
             <Route exact path="/reset-password" component={PasswordReset}/>
             <Route exact path="/" component={BottomAppBar}/>
           </Switch>
         </Router>
       </AuthProvider>
      ):(
      <SplashScreen/>
      )}
      </>
    );
}
export default App;

