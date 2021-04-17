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
    minWidth: 275,
    marginTop:"20px",
    marginBottom:"20px",
    display: "flex",
    width:"maxContent",
    textAlign: "center"
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
      if(props.day+""===props.data[i].date+""){
          notes.push(props.data[i])
      }
  }


  return (
      <div>
          {/* <Divider style={{backgroundColor: "red", height:"2px"}}/> */}
          <Card elevation={5} key={props.key} className={classes.root}>
    <Typography className={classes.day} color="textSecondary" gutterBottom>
          {props.day}
    </Typography>
      <CardContent>
        <Notes notes={notes} day={props.day} />
        <CardActions>
      </CardActions>
      </CardContent>
    </Card>
      </div>
  );
}
