import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import {firestore} from '../firebase/firebase';
import firebase from "firebase/app";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


export default function DialogDeleteNote(props) {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [name, setName] = React.useState(props.subject);
  const [note_id, setID] = React.useState(props.id);
  const handleClickOpen = () => {
    setOpen(true);
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen2(true);
  };
  const handleSubmit = (e) => {
    deleteNote(note_id)
    console.log("adding-first state")
    e.preventDefault();
}

  const deleteNote = (note_id) => {
    const user = firebase.auth().currentUser;
    var curr = new Date();
   firestore
   .collection('users')
   .doc(user.uid)
   .collection('logs')
   .doc(note_id)
   .delete()
   .then(handleClick);
  };

  return (
    <div>
       <IconButton  onClick={handleClickOpen} aria-label="comments">
            <DeleteIcon/>
       </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Deleting {props.subject}?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {props.subject}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={open2} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {props.subject} deleted!
        </Alert>
      </Snackbar>
    </div>
  );
}