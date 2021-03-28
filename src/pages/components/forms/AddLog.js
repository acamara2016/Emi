import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {firestore} from '../firebase/firebase';
import firebase from "firebase/app";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import SaveIcon from '@material-ui/icons/Save';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import  { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddLog() {
  const [open,
    setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClick = () => {
      setOpen2(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen2(false);
    };
const [choreDesc,
    setChoreDesc] = useState();
const [name,
    setName] = useState();
const [date,
    setDate] = useState();
const [time,
    setTime] = useState();
const [note,
    setNote] = useState();
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleSubmit = (e) => {
    addLog(name, "undefined", "undefined", "time", note)
    e.preventDefault();
}
  const addLog = (subject, page_number, feedback, time, note) => {
    const user = firebase.auth().currentUser;
    var curr = new Date();
    return firestore.collection('users').doc(user.uid).collection('logs')
        .add({
            date: curr,
            subject : subject,
            page_number: page_number,
            feedback : feedback,
            time: time,
            note: note,
            state: "false"
        }).then(handleClick)
        
        ;
  };


  return (
    <form 
    onSubmit={e => {
      handleSubmit(e)
    }}
     className={classes.root} noValidate autoComplete="off">
      <div   style={{  fontSize: "xx-large",
          color: "white",
          textDecorationColor: "white" }}>
      <TextField
          id="filled-multiline-static"
          label="Subject"
          variant="filled"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
   
    
      <div>
      <TextField
          id="filled-multiline-static"
          label="Notes"
          multiline
          rows={6}
          value={note}
          onChange={e => setNote(e.target.value)}
          variant="filled"
        />
      </div>
      <div style={{marginTop: "50px"}}>
      
    </div>
        <Fab type="submit" style={{marginBottom:"30px"}} variant="extended">
      <SaveIcon/>
      Save
    </Fab>
    <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {name} added to your plan!
        </Alert>
      </Snackbar>
    </form>
  );
}