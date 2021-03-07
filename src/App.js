import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
 import SignIn from './pages/SignIn';
 import SignUp from './pages/SignUp';
 import Home from './pages/Home';
import { AuthProvider } from './pages/components/Authentication';
import PasswordReset from './pages/PasswordReset';
//  import PasswordReset from "./pages/PasswordReset";

function App(){
  const user = null; 
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/reset-password" component={PasswordReset}/>
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/sign-up" component={PasswordReset} /> */}
          </Switch>
        </Router>
      </AuthProvider>
    );
}

export default App;
