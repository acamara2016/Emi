import React , {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import {firestore} from './firebase';
import auth from './firebase';
import firebase from "firebase/app";
import SimpleAccordion from "./Accordion";

export default class Listing extends React.Component {
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
    const useStyles = {
      root: {
        width: '100%',
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
    
      paper: {
        paddingBottom: 50,
      },
      list: {
        marginBottom: 20,
      },
      subheader: {
        backgroundColor: '#fff',
      },
      appBar: {
        top: 'auto',
        bottom: 0,
      },
      grow: {
        flexGrow: 1,
      },
      fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
      },
    };
  

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

    console.log(this.state.data)
  
    let curr = new Date 
    let week = []
    
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i 
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      console.log(day.slice(-2)) //slicing the last 2 digit from 2020-03-15
      week.push(day.slice(-2))
    }
    
    return (
      
      <List className={useStyles.list}>
      {this.state.data.map(({ id, date, note, subject, time }) => (
        <React.Fragment key={id}>
          {console.log("Comparing: "+date+" and "+week[0])}
          {date === week[0] && <ListSubheader style={{ backgroundColor:"#fff" }} className={useStyles.subheader}>Monday</ListSubheader>}
          {date === week[1] && <ListSubheader style={{ backgroundColor:"#fff" }} className={useStyles.subheader}>Tuesday</ListSubheader>}
          {date === week[2] && <ListSubheader style={{ backgroundColor:"#fff" }} className={useStyles.subheader}>Wednesday</ListSubheader>}
          {date === week[3] && <ListSubheader className={useStyles.subheader}>Thursday</ListSubheader>}
          {date === week[4] && <ListSubheader className={useStyles.subheader}>Friday</ListSubheader>}
          {date === week[5] && <ListSubheader className={useStyles.subheader}>Saturday</ListSubheader>}
          {date === week[6] && <ListSubheader className={useStyles.subheader}>Sunday</ListSubheader>}
          <ListItem button>

         
          <SimpleAccordion 
            date={date}
            subject={subject}
            time={time}
            id={id}
            note={note}
          />
          </ListItem>

        </React.Fragment>
      ))}
    </List>
    );
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