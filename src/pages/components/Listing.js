import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import {firestore} from './firebase/firebase';
import firebase from "firebase/app";
import SimpleCard from "./timelines/Card";

export default class Listing extends React.Component {
  state = {data:[]};
  componentDidMount(){
    if(firebase.auth().currentUser){
      firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("logs")
      .orderBy("date","asc")
      .onSnapshot((querySnapshot) => {
          const data = [];
              querySnapshot.forEach((doc) => {
                  data.push({
                      "id":doc.id,
                      "full_date":doc.data().date.toDate(),
                      "date":doc.data().date.toDate().getDate(),
                      "note":doc.data().note,
                      "subject":doc.data().subject,
                      "time":doc.data().time,
                      "feedback":doc.data().feedback,
                      "state":doc.data().state
                  });
              });  
              this.setState({data});
            
            })
    }   
  }
  render(){
    const useStyles = {
      root: {
        width: '100%',
        position: 'relative',
        height: '100vh',
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
  
    const show_week = (week)=>{
      var n = 0;
        return (
          <div style={{paddingTop:'50px'}}>
            {week.map((index) => (
        <SimpleCard data={this.state.data} day={index} key={`section-${n++}}`}/>
      ))}
          </div>
        );

    }

    console.log(this.state.data)
  
    let curr = new Date 
    let week = []
    
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i 
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      //slicing the last 2 digit from 2020-03-15
      week.push(day.slice(-2))
    }
    return (
      show_week(week)
    );
  }
}