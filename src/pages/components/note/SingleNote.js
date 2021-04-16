import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import TimerIcon from '@material-ui/icons/Timer';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';
import DialogEditNote from "../dialogs/DialogEditNote";
import DialogDeleteNote from "../dialogs/DialogDeleteNote";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    display:'contents',

  },
}));

export default function SingleNote(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         {props.notes.map((note) =>{
            if(props.notes.length>0){
                return(
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>{note.subject}</Typography>
                        <Typography className={classes.secondaryHeading}>
                            <TimerIcon/>{note.time} min
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            {note.note}
                        </Typography>
                        <Divider />
                        <AccordionActions>
                            <DialogDeleteNote/>
                            <DialogEditNote/>
                        </AccordionActions>
                        </AccordionDetails>
                        
                    </Accordion>
                    );
                }
                    return(
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                    );
            })}
    </div>
  );
}