import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';

/**
 * Author: Adama Camara
 * SearchFoodDialog is the file that function as a dialog that provide the user interface to 
 * search a product
 */

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

/* eslint-disable react/jsx-props-no-spreading */
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function AddLogDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Fab color="primary" className={classes.fab} onClick={handleClickOpen} aria-label="Add food">
            <AddIcon/>
        </Fab>
      <Dialog fullScreen open={open} onClose-={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Search food by name
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <Container style={{ padding:"30px" }} maxWidth="sm">
            <Paper style={{ height:"300px" }} elevation={3}>
                <div>
                <TextField style={{  }}/>
                <TextField/>
                </div>
            </Paper>
        </Container>

        
        {/* <Search /> */}
      </Dialog>
      
    </div>
  );
}
