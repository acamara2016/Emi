import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DialogEditNote from "../dialogs/DialogEditNote";
import DialogDeleteNote from "../dialogs/DialogDeleteNote";
import Divider from '@material-ui/core/Divider';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';


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
  },
}));

export default function Note(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
         {props.notes.map((note) =>{
            if(props.notes.length>0){
                return(
                        <Accordion key={note.id}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                        <Typography className={classes.heading}>{note.subject}</Typography>
                        <Typography className={classes.secondaryHeading}>{note.time}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            {note.note}
                        </Typography>
                        <Divider />
                        <AccordionActions>
                            <Button size="small">Delete</Button>
                            <Button size="small" color="primary">
                                Edit
                            </Button>
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