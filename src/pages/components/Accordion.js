import React,  {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';
import {firestore} from './firebase';
import auth from './firebase';
import firebase from "firebase/app";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();
  const [time, setTime] = useState("");


  const updateLog = (logID, subject, page_number, feedback, time, note)=>{
    const user = firebase.auth().currentUser
    var curr = new Date();
    firestore.collection("users").doc(user.uid).collection("logs").doc(logID).update({
      "date": curr,
      "subject" : subject,
      "note":note,
      "page_number": page_number,
      "feedback" : feedback,
      "time": time,
    })
  }

  return (
    <div style={{ margin:"10px" }} className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.subject}</Typography>
          
        </AccordionSummary>
        <form onSubmit={e => e.preventDefault()}>
        <AccordionDetails style={{ display:"grid" }}>
        <TextField
        style={{ marginBottom:"20px" }}
          id="filled-number"
          label="Time (min)"
          type="number"
          defaultValue={props.time}
          onChange={e => setTime(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
          <TextField
          id="outlined-multiline-static"
          label="Note"
          multiline
          rows={4}
          defaultValue={props.note}
          variant="outlined"
          
        />
      
        </AccordionDetails>
        <AccordionActions>
          <Button size="small">Cancel</Button>
          {/* <Button onClick={updateLog(props.id,props.subject,"props.page_number",props.feedback, time, props.note)} size="small" color="primary">
            Update
          </Button> */}
        </AccordionActions>
        </form>
      
      </Accordion>
    </div>
  );
}