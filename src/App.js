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
 import Landing from './pages/Landing';
import { AuthProvider } from './pages/components/Authentication';
import PasswordReset from './pages/PasswordReset';
import BottomAppBar from './pages/BottomAppBar';


function App(){
  const user = null; 
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/reset-password" component={PasswordReset}/>
            <Route exact path="/" component={BottomAppBar}/>
          </Switch>
        </Router>
      </AuthProvider>
    );
}

export default App;
