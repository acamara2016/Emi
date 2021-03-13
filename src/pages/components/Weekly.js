import React from 'react';
import PropTypes from "prop-types";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import SimpleAccordion from "./Accordion";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import {firestore} from './firebase';
import auth from './firebase';
import firebase from "firebase/app";

export default class Weekly extends React.Component{
    state = {data:[]};
    componentDidMount(){
        firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("logs")
        .get().then((querySnapshot) => {
            const data = [];
                querySnapshot.forEach((doc) => {
                    data.push({
                        "id":doc.id,
                        "full_date":doc.data().date.toDate(),
                        "date":doc.data().date.toDate().getDate(),
                        "note":doc.data().note,
                        "subject":doc.data().subject,
                        "time":doc.data().time,
                        "feedback":doc.data().feedback
                    });
                });  
                this.setState({data});
              })
              .catch(function(error){
                  console.log("Error getting document ", error);
            });    
            
    }
    

    render(){
        var myCurrentDate = new Date();
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
        return(
            <div id="against">
                {this.state.data.map(d=>{
                   
                    console.log(d)
                    return(
                    single_log(
                        d.id,
                        d.date, 
                        d.subject,
                        d.page_number,
                        d.time,
                        d.feedback,
                        d.state, 
                        d.note
                    )
                    );
                })}
            </div>
        )
    }
}
function single_log(logID, date, subject, page_number, time, feedback, state, note) {
    
    return (
  
      <SimpleAccordion
        style={{ margin: "20px" }}
        date={date}
        subject={subject}
        page_number={page_number}
        time={time}
        feedback={feedback}
        id={logID}
        note={note}
      />
    );
  }
  