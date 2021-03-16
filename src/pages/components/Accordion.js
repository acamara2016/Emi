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
  
        const [choreDesc, setChoreDesc] = useState();
        const [name, setName] = useState();
        const [date, setDate] = useState();
        const [time, setTime] = useState();
        const [note, setNote] = useState();
  
        const handleSubmit= (e) => {
          updateLog(props.id,props.subject,"props.page_number",props.feedback, time, note)
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
        <div style={{
            margin: "10px"
        }} className={classes.root}>
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
                            onChange={e => setNote(e.target.value)}/>
                        
                        <br/>
                        <label>Date:</label>
                        <br/>
                        <input
                            name='date'
                            type='date'
                            value={date}
                            onChange={e => setDate(e.target.value)}/>
                        <br/>
                        <input type='submit' value='Update Log'/>
                    </form>
                </AccordionDetails>
                <AccordionActions>
                    <Button size="small">Complete</Button>
                    {/* <Button onClick={updateLog(props.id,props.subject,"props.page_number",props.feedback, time, props.note)} size="small" color="primary">
            Update
          </Button> */}
                </AccordionActions>

            </Accordion>
        </div>
    );
}