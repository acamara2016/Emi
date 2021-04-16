import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AlignItemsList from './AlignItemsList';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop:"20px",
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
    //   border: '1px solid #a7e0aa',
    //   borderWidth:'thick',
    //   borderRadius:'10px',
      height:'max-content',
      width:'100px'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const notes = [];
  const day=(props.day).toUTCString;
//   console.log(props.data)
//   console.log(props.day)
  for(let i = 0; i < props.data.length; i++) {
      console.log("From the data "+props.data[i].date)
      console.log("From the day "+props.day)
      if(props.day+""===props.data[i].date+""){
          notes.push(props.data[i])
          console.log("Hey ")
      }
  }


  return (
    <Card elevation={5} key={props.key} className={classes.root}>
    <Typography className={classes.day} color="textSecondary" gutterBottom>
          {props.day}
    </Typography>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.subject}
        </Typography> */}
        <AlignItemsList notes={notes} day={props.day} />
        {/* <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
          {props.note}
          <br />
        </Typography>
        <CardActions>
      </CardActions>
      </CardContent>
    </Card>
  );
}
