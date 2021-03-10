import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();

  return (
    <div style={{ margin:"10px" }} className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.subject}</Typography>
          
        </AccordionSummary>
        <AccordionDetails style={{ display:"grid" }}>
        <TextField
        style={{ marginBottom:"20px" }}
          id="filled-number"
          label="Page Number"
          type="number"
          defaultValue="33"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget."
          variant="outlined"
          
        />
      
        </AccordionDetails>
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Update
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}