import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import app from './components/firebase';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import BottomNavigation from './components/BottomNavigation';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import Fab from '@material-ui/core/Fab';
import {getCurrentDate} from './components/Date';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import TabPanel from './components/TabPanel';
import SaveButton from './components/save_button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function MyFunction() {
    var myCurrentDate = new Date();
    // +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+ myCurrentDate.getSeconds(
    var date = myCurrentDate.getFullYear() + '/' + (myCurrentDate.getMonth()+1) + '/' + myCurrentDate.getDate();
    const newCurrentDate = "Current Date and Time: "+date;
    var curr = new Date; // get current date
var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
var day1 = first + 1; 
var day2 = first + 2;
var day3 = first + 3; 
var day4 = first + 4;
var day5 = first + 5;
var last = first + 6; // last day is the first day + 6

var firstday = new Date(curr.setDate(first)).toUTCString();

var lastday = new Date(curr.setDate(last)).toUTCString();
    return (
      <div style={{ backgroundColor:"#f2dc99", height:"500px"}}>
      <TabPanel/>
      </div>
    );
  }


export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor:"#F2DC99", alignContent:"center", justifyContent:"center", alignItems:"center", height:"100%"}}   className={classes.root}>
      <Box component="span" m={1} maxWidth="lg">
        <MyFunction/>
      </Box>
    </div>
  );
}