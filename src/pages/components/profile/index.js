import React, { useCallback, useContext } from 'react'; // add {useCallback, useContext}
import Paper from '@material-ui/core/Paper';
import firebase from "firebase/app";
import { useHistory } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, Redirect } from "react-router";
import Logo from "../imgs/logo.png";
export default function Profile(props,{history}){
    
    var currentUser = null;
    var email = null;
    var login_logout = "LOGIN";
    if(firebase.auth().currentUser){
      currentUser = firebase.auth().currentUser
      email = firebase.auth().email
      login_logout = "DISCONNECT";
    }
    const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: "130px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
      
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));
      const classes = useStyles();
    const handleSignOut = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await firebase.auth().signOut()
            history.push("/sign-in");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
      if (currentUser===null) {
        return <Redirect to="/sign-in" />;
      } 
    return(
        <Container maxWidth="lg">
        <CssBaseline/>
        <div className={classes.paper}>
        <img alt="logo" className={classes.large} src={Logo} width="109px"/>
    
        <form onSubmit={handleSignOut}  className={classes.form} noValidate>
        <h3 style={{textAlign: "center"}}>{
                email
                }</h3>
        
          <Button
            style={{ backgroundColor:"#f2dc99", fontSize:"20px", fontWeight:"bold", color:"#6b6552"}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {login_logout}
          </Button>
    
        </form>
      </div>
        
        </Container>
    );
}