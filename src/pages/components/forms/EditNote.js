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

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  container: {
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
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

export default function EditNote(props) {
  const classes = useStyles();
  const [open,
    setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(props.date);
    const [time, setTime] = React.useState(props.time);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const handleTimerChange = (time) => {
      setTime(time);
    };
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
    setName] = useState(props.subject);
const [date,
    setDate] = useState(props.date);
const [note,
    setNote] = useState(props.note);

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleSubmit = (e) => {
    updateLog(props.id, name, "props.page_number", props.feedback, time, note, selectedDate)
    setOpen(false);
    e.preventDefault();
}
//   const handleSubmit = (e) => {
//     addLog(name, "undefined", "undefined", timer, note, selectedDate)
//     console.log("adding-first state")
//     e.preventDefault();
// }
const updateLog = (id, subject, page_number, feedback, time, note, date) => {
  console.log("time: " + time+" date "+date);
  const user = firebase
      .auth()
      .currentUser
  var curr = new Date();
  firestore
      .collection("users")
      .doc(user.uid)
      .collection("logs")
      .doc(id)
      .update({
          "last_change": curr,
          "subject": subject,
          "note": note,
          // "date":date,
          "page_number": "undefined",
          "feedback": "undefined",
          // "duration": "time",
          "state": "false"
      }).then(handleClick)
}
  const addLog = (subject, page_number, feedback, time, note, date) => {
    const user = firebase.auth().currentUser;
    var curr = new Date();
   firestore.collection('users').doc(user.uid).collection('logs')
        .add({
            latest_change: date,
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
    <div className={classes.container}
    onSubmit={e => {
      handleSubmit(e)
    }}
     className={classes.root} noValidate autoComplete="off">
      <div   style={{  fontSize: "xx-large",
          color: "white",
          textDecorationColor: "white" }}>
      <TextField
        id="datetime-local"
        label="When?"
        variant="outlined"
        type="datetime-local"qqq
        defaultValue={selectedDate}
        onChange={e => setSelectedDate(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <TextField
        id="time"
        label="How long did it take? (min)"
        type="number"
        variant="outlined"
        defaultValue={time}
        onChange={e => setTime(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 10, // 5 min
        }}
    />
      <TextField
          id="filled-multiline-static"
          label="Subject"
          variant="outlined"
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
          variant="outlined"
        />
      </div>
      <div style={{marginTop: "50px"}}>
      
    </div>
        <Fab onClick={handleSubmit} style={{marginBottom:"30px"}} variant="extended">
      <SaveIcon/>
      Save
    </Fab>
    <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {name} updated!
        </Alert>
      </Snackbar>
    </div>
  );
}