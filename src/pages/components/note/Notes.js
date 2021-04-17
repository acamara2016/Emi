import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SimpleAccordion from "../Accordion";

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

export default function Notes(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div style={{ flex: '1',overflowY:'scroll',}}>
          {props.notes.map((note) =>{
              if(props.notes.length>0){
                  return(
                      <SimpleAccordion note={note.note} id={note.id} time={note.time} subject={note.subject} />
                      );
                  }
                      return(
                          <IconButton>
                              <EditIcon/>
                          </IconButton>
                      );
              })}
        </div>
    </div>
  );
}