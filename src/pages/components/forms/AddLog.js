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
import DatePicker from 'react-datepicker';

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

export default function AddLog() {
  const classes = useStyles();
    const [open2, setOpen2] = React.useState();
    const [timer, setTimer] = React.useState();
    const [startDate, setStartDate] = useState(new Date());
    
    const handleClick = () => {
      setOpen2(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen2(false);
    };

const [name,
    setName] = useState();
const [date,
    setDate] = useState();
const [time,
    setTime] = useState();
const [note,
    setNote] = useState();

  const handleSubmit = (e) => {
    addLog(name, "undefined", "undefined", timer, note, startDate.getDate(), startDate)
    console.log("adding-first state")
    e.preventDefault();
}
  const addLog = (name, page_number, feedback, timer, note, date, full) => {
    const user = firebase.auth().currentUser;
    var curr = new Date();

    console.log(date)
    console.log(full)
   firestore.collection('users').doc(user.uid).collection('logs')
        .add({
            date: full,
            
            subject : name,
            page_number: page_number,
            feedback : feedback,
            time: 69,
            note: note,
            state: "false"
        }).then(handleClick)
        
        ;
  };


  return (
    <div className={classes.container} noValidate autoComplete="off">
     <div  
      style={{  
          fontSize: "xx-large",
          color: "white",
          textDecorationColor: "white" 
          }}>
            <div class="card mb-4 post-title-panel">
              <div class="card-body">
                <div class="md-form mt-1 mb-0">
                  <input 
                  type="text" 
                  id="form1" 
                  class="form-control" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <textarea 
              class="md-textarea form-control"
              row="3"
              length="400"
              style={{minHeight: '200px'}}
              name="" 
              value={note}
              onChange={e => setNote(e.target.value)}
              id="post_content">

              </textarea>
            </div>
            <div style={{display:'flow-root'}} class="card mb-4">
              
              <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
              <input
              id="time"
              label="How long did it take? (min)"
              type="number"
              variant="outlined"
              defaultValue={time}
              onChange={e => setTime(e.target.value)}
              
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 10, // 5 min
              }}
          />
            </div>
        
  
      </div>
   

        <Fab color="primary" class="btn" onClick={handleSubmit} style={{marginBottom:"30px"}} variant="extended">
      <SaveIcon/>
      Save
    </Fab>
    <Snackbar style={{position: 'fixed',}} open={open2} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {name} created!
        </Alert>
      </Snackbar>
    </div>
  );
}