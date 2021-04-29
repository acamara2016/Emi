import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {firestore} from './firebase/firebase';
import Fab from '@material-ui/core/Fab';
import firebase from "firebase/app";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import EditIcon from '@material-ui/icons/Edit';
import TimerIcon from '@material-ui/icons/Timer';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import DialogDeleteNote from "./dialogs/DialogDeleteNote";
import DialogEditNote from "./dialogs/DialogEditNote";
import DialogAddNote from "./dialogs/DialogAddNote.js";

const useStyles = makeStyles((theme) => ({
    root: {
     
      textDecoration:'none',
      color:'#000',
      background:'#ffc',
      display:'block',
      height:'10em',
      width:'10em',
      padding:'1em',
      boxShadow:'5px 5px 7px rgba(33,33,33,.7)'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      display: 'contents',
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
    thirdTitle:{
      marginLeft: '20px',
    },
}));

export default function SimpleAccordion(props) {
    const classes = useStyles();
    const [state,setState] = React.useState({checkedA: false, checkedB: false, checkedF: false, checkedG: false});

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
    };
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
    const handleSubmit = (e) => {
        submitWork(props.id)
        e.preventDefault();
    }

    const submitWork = (logID) => {
        console.log("submitting work");
        const user = firebase
            .auth()
            .currentUser
        var curr = new Date();
        firestore
            .collection("users")
            .doc(user.uid)
            .collection("logs")
            .doc(logID)
            .update({
                "state": "true"
            })
    }
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  

    return (
    //   <div >
    //   <div class="card card-body">
    //     <h4 class="card-title">{props.subject} {props.time}</h4>
    //     <p class="card-text">{props.note}</p>
    //     <div style={{display:'flex'}} class="flex-row">
    //       <a class="card-link"><DialogEditNote class="card-link" subject={props.subject} time={props.time} note={props.note} date={props.date} id={props.id} /></a>
    //       <a class="card-link"><DialogDeleteNote class="card-link" subject={props.subject} note={props.note} date={props.date} id={props.id}/></a>   
    //     </div>
    //   </div>
    // </div>

    <div style={{padding:'0px'}} class=" col">
        <div class="card">
               <h5 style={{backgroundColor:'#ff7043', fontSize:'x-large', fontWeight:'bold'}} class="card-header white-text">{props.subject}</h5>
              <div style={{}} class="card-body">
            
                <p style={{fontSize:'large'}} class="card-text">{props.note}</p>
                
                <footer class="blockquote-footer">
                  <div style={{display:'flex'}} class="flex-row">
                    <a class="waves-effect waves-light"><DialogEditNote subject={props.subject} time={props.time} note={props.note} date={props.date} id={props.id} /></a>
                    <a class="waves-effect waves-light"><DialogDeleteNote subject={props.subject} note={props.note} date={props.date} id={props.id}/></a>   
                  </div>
                </footer>
              </div>
              </div>
            </div>

      //   <Card elevation={5} className={classes.root} variant="outlined" >
      //       <CardContent>
      //       <Typography className={classes.title} color="textSecondary" gutterBottom>
      //       {props.subject}
      //   </Typography>
      //           <Typography className={classes.secondaryHeading}>
      //               <TimerIcon className={classes.thirdTitle}/>
      //               {props.time}min
      //               {/* {props.state=="false" ? "" : <CheckCircleOutlineIcon/>} */}
      //           </Typography>
      
               
      //           <Typography variant="body2" component="p">
      //               {props.note}
      //           </Typography>
              
      //           <CardActions>
      //               {/* <FormDialog id={props.id} time={props.time} subject={props.subject} note={props.note}/> */}
      //               <DialogEditNote subject={props.subject} time={props.time} note={props.note} date={props.date} id={props.id} />
      //               <DialogDeleteNote subject={props.subject} note={props.note} date={props.date} id={props.id}/>
      //           </CardActions>
      //   </CardContent>
      //   <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      //   <Alert onClose={handleClose} severity="success">
      //     Submitted!
      //   </Alert>
      // </Snackbar>
      //   </Card>
    );
}

function FormDialog(props) {
    const [open,
        setOpen] = React.useState(false);
    const [subject=props.subject,
        setSubject] = useState();
    const [time,
        setTime] = useState();
    const [note,
        setNote] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        updateLog(props.id, subject, "undefined", "undefined", "undefined", note)
        e.preventDefault();
    };
    const handleSubmit = (e) => {
        updateLog(props.id, subject, "props.page_number", props.feedback, time, note)
        setOpen(false);
        e.preventDefault();
    }

    const updateLog = (logID, name, page_number, feedback, time, note) => {
        console.log(logID+"/"+name+"/"+note);
        const user = firebase
            .auth()
            .currentUser
        var curr = new Date();
        firestore
            .collection("users")
            .doc(user.uid)
            .collection("logs")
            .doc(logID)
            .update({
                "last_change": curr,
                "subject": name,
                "note": note,
                "page_number": "undefined",
                "feedback": "undefined",
                "time": "undefined",
                "state": "false"
            })
    }


    return (
        <div>
            <Fab color="primary" onClick={handleClickOpen} variant="extended">
                <EditIcon/>
                        Edit
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <Paper>
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Subject"
            type="text"
            value={subject}
            variant="outlined" 
            fullWidth
            onChange={e => setSubject(e.target.value)}
            defaultValue={props.subject}
          />
          <TextField
            style={{marginTop:"20px"}}
            autoFocus
           
            id="note"
            defaultValue={note}
            label="Note"
            variant="outlined" 
            multiline
            value={note}
            row={6}
            defaultValue={props.note}
            type="text"
            onChange={e => setNote(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Update
          </Button>
        </DialogActions>

            </Paper>
      </Dialog>
        </div>
    );
}
