import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Notes from "../note/Notes";
const useStyles = makeStyles({
  root: {
   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  date_div:{
    maxWidth: 150,
    minWidth: 10,
    display: 'grid',
    textAlign: 'center',
  },
  day:{
      fontSize:"-webkit-xxx-large",
      height:'max-content',
      width:'100px'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const notes = [];
  for(let i = 0; i < props.data.length; i++) {
    
    
      if(
        props.day+""===props.data[i].date+"" && 
        props.data[i].full_date.toLocaleString('default', { month: 'long' })+""===props.monthName
        ){
          notes.push(props.data[i])
      }
  }


  return (
      <section class="mb-5" key={props.key} className={classes.root}>
        <Notes month={props.monthName} notes={notes} day={props.day} />
    </section>
  );
}
