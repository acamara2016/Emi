import logo from './logo.svg';
import './App.css';
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

let config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: "center", // all or center or {x:1,y:1,width:100,height:100}
  color: ["random", "#ff0000"],
  cross: "dead", // cross or bround
  random: 15,  // or null,
  g: 5,    // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
  }
};

function App(){
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  const user = null; 

    return (
      <>
      {loading === false ?(
        <AuthProvider>
          <ParticlesBg 
            fixed
           style={{
            position: "fixed",
            zIndex: -1,
            top: 0,
            left: 0
           }}
           type="random" bg={true} />
         <Router>
           <Switch>
             <Route exact path="/sign-in" component={SignIn} />
             <Route exact path="/sign-up" component={SignUp} />
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

