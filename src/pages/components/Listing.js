import React , {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import {firestore} from './firebase';
import auth from './firebase';
import firebase from "firebase/app";

const messages = [
    {
      date: "1",
      primary: 'Brunch this week?',
      secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: '/static/images/avatar/5.jpg',
    },
    {
      id: 2,
      primary: 'Birthday Gift',
      secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
      person: '/static/images/avatar/1.jpg',
    },
    {
      id: 3,
      primary: 'Recipe to try',
      secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
      person: '/static/images/avatar/2.jpg',
    },
    {
      id: 4,
      primary: 'Yes!',
      secondary: 'I have the tickets to the ReactConf for this year.',
      person: '/static/images/avatar/3.jpg',
    },
    {
      id: 5,
      primary: "Doctor's Appointment",
      secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
      person: '/static/images/avatar/4.jpg',
    },
    {
      id: 6,
      primary: 'Discussion',
      secondary: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
      person: '/static/images/avatar/5.jpg',
    },
    {
      id: 7,
      primary: 'Summer BBQ',
      secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
      person: '/static/images/avatar/1.jpg',
    },
  ];
  
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

const addLog = (subject, page_number, feedback, time) => {
    const user = firebase.auth().currentUser;
    var curr = new Date();
    return firestore.collection('users').doc(user.uid).collection('logs')
        .add({
            date: curr,
            subject : subject,
            page_number: page_number,
            feedback : feedback,
            time: time,
        });
  };


export default function Listing() {
  const classes = useStyles();
  let curr = new Date 
  let week = []
  
  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i 
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
    week.push(day)
  }


  return (

    <List className={classes.list}>
    {messages.map(({ id, primary, secondary, person }) => (
      <React.Fragment key={id}>
        {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
        {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
        <ListItem button>

          <ListItemText primary={primary} secondary={secondary} />
        </ListItem>
      </React.Fragment>
    ))}
  </List>
  );
}