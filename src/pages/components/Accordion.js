import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import DialogContentText from '@material-ui/core/DialogContentText';
import EditIcon from '@material-ui/icons/Edit';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
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

    const [state,
        setState] = React.useState({checkedA: false, checkedB: false, checkedF: false, checkedG: false});

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
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
                "time": time
            })
    }

    return (
        <div
            style={{
            margin: "10px",
            backgroundImage:  `url(${background})`
        }}
            className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={< ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography className={classes.heading}>{props.subject}</Typography>

                </AccordionSummary>
                <AccordionDetails
                    style={{
                    display: "grid"
                }}>
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
                        <FormDialog time={props.time} subject={props.subject} note={props.note}/>
                    </form>
                </AccordionDetails>
                <AccordionActions>
                    <FormControlLabel
                        control={< Checkbox checked = {
                        state.checkedB
                    }
                    onChange = {
                        handleChange
                    }
                    name = "checkedB" color = "primary" />}
                        label="Primary"/>
                    <FormDialog/>

                </AccordionActions>

            </Accordion>
        </div>
    );
}

function FormDialog(props) {
    const [open,
        setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton
                onClick={handleClickOpen}
                color="primary"
                aria-label="upload picture"
                component="span">
                <EditIcon/>
            </IconButton>
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
