import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import app from "./components/firebase";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import BottomNavigation from "./components/BottomNavigation";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import Fab from "@material-ui/core/Fab";
import { getCurrentDate } from "./components/Date";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import TabPanel from "./components/TabPanel";
import SaveButton from "./components/save_button";
import CustomizedInputs from "./components/Input";
import TextField from "@material-ui/core/TextField";
import SimpleAccordion from "./components/Accordion";
import Modal from '@material-ui/core/Modal';
import FullScreenDialog from './components/Full_screen_dialog';
import AnimatedTabs from './components/AnimatedTab';

export default class Landing extends React.Component {
  state = {
    data: [
      {
        date: "7",
        subject: "Subject 01",
        page_number: "33",
        time: "60",
        feedback: "1",
        state : "first"
      },
      {
        date: "8",
        subject: "Subject 02",
        page_number: "33",
        time: "60",
        feedback: "2",
        state : ""
      },
      {
        date: "9",
        subject: "Subject 03",
        page_number: "33",
        time: "60",
        feedback: "3",
        state : ""
      },
      {
        date: "7",
        subject: "Subject 04",
        page_number: "33",
        time: "60",
        feedback: "1",
        state : "first"
      },
      {
        date: "12",
        subject: "Subject 05",
        page_number: "33",
        time: "60",
        feedback: "1",
        state : ""
      },
      {
        date: "11",
        subject: "Subject 06",
        page_number: "33",
        time: "60",
        feedback: "1",
        state : ""
      },
    ],
  };
  componentDidMount() {
  
  }
  componentDidUpdate() {}
  render() {
    var myCurrentDate = new Date();
    // +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+
    // myCurrentDate.getSeconds(
    var date =
      myCurrentDate.getFullYear() +
      "/" +
      (myCurrentDate.getMonth() + 1) +
      "/" +
      myCurrentDate.getDate();
    const newCurrentDate = "Current Date and Time: " + date;
    var curr = new Date(); // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    
    var day1 = first + 1;
    var day2 = first + 2;
    var day3 = first + 3;
    var day4 = first + 4;
    var day5 = first + 5;
    var last = first + 6; // last day is the first day + 6
 
    return (
      <AnimatedTabs/>
    );
  }
}

function single_log(date, subject, page_number, time, feedback, state) {
  return (
    <SimpleAccordion
      date={date}
      subject={subject}
      page_number={page_number}
      time={time}
      feedback={feedback}
    />
  );
}
