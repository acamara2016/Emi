import React, { useCallback, useContext } from 'react'; // add {useCallback, useContext}
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Logo from "../imgs/logo.png";
import LinearDeterminate from '../progress/linear_determinate';
import LinearProgress from '@material-ui/core/LinearProgress';

import { Link } from 'react-router-dom'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a color="inherit" href="https://www.thewarmdemander.com/?fbclid=IwAR2M_lCO6rcIBmPsv55hQfVKSjoVMVr8VnqY_ls_p5r1Tbu2tanFdfUfhyA">
        Emi's Tutoring Website 
      </a>{''}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
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
export default function SplashScreen() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg">
        <LinearProgress/>
      <CssBaseline />
      <div className={classes.paper}>
        <img alt="logo" className={classes.large} src={Logo} width="109px"/>
    
      
      </div>
    </Container>
  );
}