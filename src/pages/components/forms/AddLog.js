import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function AddLog() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div   style={{  fontSize: "xx-large",
          color: "white",
          backgroundColor: "#4b6452",
          textDecorationColor: "white" }}>
      <TextField
          label="Size"
          style={{  fontSize: "xx-large",
          color: "white",
          backgroundColor: "#4b6452",
          textDecorationColor: "white" }}
          id="outlined-size-small"
          placeholder="Subject here"
          variant="outlined"
          size="small"
        />
      </div>
   
      <div>
        <TextField
          label="Size"
          id="outlined-size-normal"
          placeholder="Duration"
          variant="outlined"
          style={{  fontSize: "xx-large",
          color: "white",
          backgroundColor: "#4b6452",
          textDecorationColor: "white" }}
        />
      </div>
      <div>
        <TextField
          label="Size"
          style={{  fontSize: "xx-large",
          color: "white",
          backgroundColor: "#4b6452",
          textDecorationColor: "white" }}
          id="outlined-size-normal"
          multiline="true"
          size="medium"
          defaultValue="Normal"
          variant="outlined"
        />
      </div>
    </form>
  );
}