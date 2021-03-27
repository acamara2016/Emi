import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DialogContentText from '@material-ui/core/DialogContentText';
import EditIcon from '@material-ui/icons/Edit';
import DialogTitle from '@material-ui/core/DialogTitle';
import background from './imgs/paper_@2X.png';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme
            .typography
            .pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    }
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
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  

    return (
        <div style={{ margin: "10px",backgroundImage: `url(${background})`}}
            className={classes.root}>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography className={classes.heading}>{props.subject}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {props.note}
                </Typography>
                </AccordionDetails>
                <AccordionActions>
                    <FormDialog time={props.time} subject={props.subject} note={props.note}/>
                    <Fab onClick={handleClick} color="secondary" variant="extended">
                        <CheckCircleOutlineIcon className={classes.extendedIcon} />
                        Submit
                    </Fab>
                </AccordionActions>
        </Accordion>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Submitted!
        </Alert>
      </Snackbar>
        </div>
    );
}

function FormDialog(props) {
    const [open,
        setOpen] = React.useState(false);
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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (e) => {
        updateLog(props.id, props.subject, "props.page_number", props.feedback, time, note)
        e.preventDefault();
    }

    const updateLog = (logID, subject, page_number, feedback, time, note) => {
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
                "date": curr,
                "subject": subject,
                "note": note,
                "page_number": page_number,
                "feedback": feedback,
                "time": time,
                "state": "false"
            })
    }
    const submitWork = (logID, subject, page_number, feedback, time, note) => {
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
                "date": curr,
                "subject": subject,
                "note": note,
                "page_number": page_number,
                "feedback": feedback,
                "time": time,
                "state": "true"
            })
    }

    return (
        <div>
            <Fab color="primary" onClick={handleClickOpen} variant="extended">
                <EditIcon/>
                        Edit
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit {props.subject}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send
                        updates occasionally.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth/>
                    <form
                        onSubmit={e => {
                        handleSubmit(e)
                    }}>
                        <label>Duration:</label>
                        <br/>
                        <input
                            name='Duration'
                            type='number'
                            defaultValue={props.time}
                            value={time}
                            onChange={e => setTime(e.target.value)}/>
                        <br/>
                        <label>Note:</label>
                        <br/>
                        <input
                            name='choreDesc'
                            type='text'
                            defaultValue={props.note}
                            value={note}
                            onChange={e => setNote(e.target.value)}/> {/* <input type='submit' value='Update Log'/> */}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
