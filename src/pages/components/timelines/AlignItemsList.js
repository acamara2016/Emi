import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Note from "../../../online-education/svg/087-notes.svg";
import Pencil from "../../../education/svg/017-pencil.svg";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NotesIcon from '@material-ui/icons/Notes';
import TimerIcon from '@material-ui/icons/Timer';
import border from "../imgs/border_image.png";
import DialogEditNote from "../dialogs/DialogEditNote";
import DialogDeleteNote from "../dialogs/DialogDeleteNote";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        {props.notes.map((note) =>{
            if(props.notes.length>0){
                return(
                    <div key={note.id}>
                        <ListItem
                        key={note.id}
                        style={{
                            minWidth:'140px',
                            maxWidth:'500px', 
                            // border:'1px solid',
                            // borderRadius:'10px', 
                            marginBottom:'10px', 
                            // borderWidth:'thick',
                            
                        }} 
                        alignItems="flex-start">
                            <ListItemAvatar key={note.id} >
                            <NotesIcon key={note.id}/>
                            </ListItemAvatar>
                            <ListItemText
                            primary={note.subject}
                            secondary={
                                <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    <ListItemAvatar style={{display:'content'}}>
                                    <TimerIcon/>
                                    {note.time}min
                                    </ListItemAvatar>
                                </Typography>
                                {note.note}
                                </React.Fragment>
                            }
                            />
                            <ListItemSecondaryAction key={note.id} style={{display:'inline-grid'}}>
                                <DialogDeleteNote/>
                                <DialogEditNote/>
                                </ListItemSecondaryAction>
                        </ListItem>
                    </div>
                );
            }
                return(
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                );
        })}
    </List>
  );
}
