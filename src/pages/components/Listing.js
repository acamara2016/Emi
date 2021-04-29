import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import {firestore} from './firebase/firebase';
import Chip from '@material-ui/core/Chip';
import firebase from "firebase/app";
import SimpleCard from "./timelines/Card";
import Pagination from '@material-ui/lab/Pagination';
export default class Listing extends React.Component {

  state = {data:[], page : 1, week : [1,2,3,4,5,6,7], week1: [8,9,10,11,12,13,14], week2: [14,16,17,18,19,20,21], week3: [22,23,24,25,26,27,28], week4: [29,30,31]};
  handleChange = (event, value) => {
    this.setState(this.state.page = value);
  };
  componentDidUpdate(){

  }
  
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


    
    
    const show_week = (week, month_size)=>{
      var n = 0;
        return (
          <List 
          style={{
            width: '100%',
            position: 'relative',
            height: '100vh',
            overflow: 'auto',
           overflow: 'auto',
           display: 'inline-grid'
          }}
           subheader={<li/>} >
            {week.map((index) => (
              <li style={{padding:'0px'}}>
                <ul style={{padding:'0px'}} >
                  <ListSubheader
                    
                  >
                    <Chip  label={`${index} - ${this.props.jp}`}>{`${index} April`}</Chip>
                    
                  </ListSubheader>
                  <ListItem style={{display:'contents'}}>
                  <SimpleCard monthName={this.props.monthName} month={this.props.month} data={this.state.data} day={index} key={`section-${n++}}`}/>
                  </ListItem>
                </ul>
              </li>
            ) )}
          </List>
        );

    }
    var days = function(month,year) {
      return new Date(year, month, 0).getDate();
    };

    console.log(this.state.data)
  
    let curr = new Date
    let month_size = this.props.current_month
    let current_month = []
    let week = []
    let week1 = []
    let week2 = []
    let week3 = []
    let week4 = []
    console.log(month_size)
    for (let i = 1; i <= month_size; i++) {
      // let first = curr.getDate() - curr.getDay() + i 
      // let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      // //slicing the last 2 digit from 2020-03-15

      week.push(i)
    }

    return (
      show_week(week, month_size)

    );
  }
}