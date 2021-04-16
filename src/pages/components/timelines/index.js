import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import SimpleAccordion from "../Accordion";
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  // function Display(size){
  //   for(int i=0; i<size){
  //     return(
  //         <React.Fragment key={x}>
  //         <TimelineItem>
  //     <TimelineOppositeContent>
  //         <Typography color="textSecondary">{props.week[x]}</Typography>
  //     </TimelineOppositeContent>
  //     <TimelineSeparator>
  //         <TimelineDot />
  //         <TimelineConnector />
  //     </TimelineSeparator>
  //     <TimelineContent>
  //         <Typography variant="h6" component="h1">
  //         Eat
  //         </Typography>
  //         <Typography>Because you need strength</Typography>
  //     </TimelineContent>
  //     </TimelineItem>    
  //     </React.Fragment>
  //     );
  //   }
  // }
export default function Timelines(props) {
    const classes = useStyles();

    var x=0;
  return (
    <React.Fragment>
       
      <Timeline align="alternate">
      
          {
              props.week.map(({})=>(
                    <React.Fragment key={x}>
                    <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textSecondary">{props.week[x]}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" component="h1">
                    Eat
                    </Typography>
                    <Typography>Because you need strength</Typography>
                </TimelineContent>
                </TimelineItem>    
                </React.Fragment>
              ))
              
          }
      
      </Timeline>
    </React.Fragment>
  );
}