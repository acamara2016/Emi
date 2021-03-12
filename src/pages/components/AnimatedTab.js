import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import SimpleAccordion from "./Accordion";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import db from './firebase';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    position: "relative",
    minHeight: 200,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
}));

export default function AnimatedTabs() {
  const d1 = [];
  const d2 = [];
  const d3 = [];
  const d4 = [];
  const d5 = [];
  const d6 = [];
  const d7 = [];
  const data = [
    {
      date: "7",
      subject: "Subject 01",
      page_number: "33",
      time: "60",
      feedback: "1",
      state: "first",
    },
    {
      date: "8",
      subject: "Subject 02",
      page_number: "33",
      time: "60",
      feedback: "2",
      state: "",
    },
    {
      date: "9",
      subject: "Subject 03",
      page_number: "33",
      time: "60",
      feedback: "3",
      state: "",
    },
    {
      date: "7",
      subject: "Subject 04",
      page_number: "33",
      time: "60",
      feedback: "1",
      state: "first",
    },
    {
      date: "12",
      subject: "Subject 05",
      page_number: "33",
      time: "60",
      feedback: "1",
      state: "",
    },
    {
      date: "11",
      subject: "Subject 06",
      page_number: "33",
      time: "60",
      feedback: "1",
      state: "",
    },
    {
      date: "10",
      subject: "Subject 07",
      page_number: "33",
      time: "60",
      feedback: "1",
      state: "",
    },
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [user, setUser] = useState()
  const [homeworkList, sethomeworkList] = useState();

  useEffect(()=>{
    createGroceryList("adama");
  })

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const createGroceryList = (userName) => {
    return db.collection('homework_list')
        .add({
            created: db.app.firestore.FieldValue.serverTimestamp(),
            users: [{ name: userName}]
        });
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />,
      label: "Add",
    },
    {
      color: "secondary",
      className: classes.fab,
      icon: <EditIcon />,
      label: "Edit",
    },
    {
      color: "inherit",
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: "Expand",
    },
  ];
  var myCurrentDate = new Date();
  var date =
    myCurrentDate.getFullYear() +
    "/" +
    (myCurrentDate.getMonth() + 1) +
    "/" +
    myCurrentDate.getDate();
  const newCurrentDate = "Current Date and Time: " + date;
  var curr = new Date(); // get current date
  var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

  var day1 = first + 1;
  var day2 = first + 2;
  var day3 = first + 3;
  var day4 = first + 4;
  var day5 = first + 5;
  var last = first + 6; // last day is the first day + 6

  return (
    <div style={{ backgroundColor: "#F2DC99" }} className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Week" {...a11yProps(0)} />
          <Tab label="Today" {...a11yProps(1)} />
          <Tab label="Account" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div
            style={{
              display: "grid",
              backgroundColor: "#F2DC99",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <TextField
              style={{
                backgroundColor: "#9bcaf2",
                margin: "20px",
                textAlign: "center",
              }}
              id="outlined-multiline-static"
              label="Week Objective"
              multiline
              rows={4}
              defaultValue="Ganbare"
              variant="outlined"
            />
            <div
              style={{
                margin: "20px",
              }}
              id="daily_list_container"
            >
              {data.map((d) => {
                {
                  if (d.date == "" + first) {
                    d1.push({
                      date: d.date,
                      subject: d.subject,
                      page_number: d.page_number,
                      time: d.time,
                      feedback: d.feedback,
                      state: d.state,
                    });
                  } else if (d.date == "" + day1) {
                    d2.push({
                      date: d.date,
                      subject: d.subject,
                      page_number: d.page_number,
                      time: d.time,
                      feedback: d.feedback,
                      state: d.state,
                    });
                  } else if (d.date == "" + day2) {
                    d3.push({
                      date: d.date,
                      subject: d.subject,
                      page_number: d.page_number,
                      time: d.time,
                      feedback: d.feedback,
                      state: d.state,
                    });
                  } else if (d.date == "" + day3) {
                    d4.push({
                      date: d.date,
                      subject: d.subject,
                      page_number: d.page_number,
                      time: d.time,
                      feedback: d.feedback,
                      state: d.state,
                    });
                  } else if (d.date == "" + day4) {
                    d5.push({
                      date: d.date,
                      subject: d.subject,
                      page_number: d.page_number,
                      time: d.time,
                      feedback: d.feedback,
                      state: d.state,
                    });
                  } else if (d.date == "" + day5) {
                    d6.push({
                      date: d.date,
                      subject: d.subject,
                      page_number: d.page_number,
                      time: d.time,
                      feedback: d.feedback,
                      state: d.state,
                    });
                  } else if (d.date == "" + last) {
                    d7.push({
                      date: d.date,
                      subject: d.subject,
                      page_number: d.page_number,
                      time: d.time,
                      feedback: d.feedback,
                      state: d.state,
                    });
                  }

            
                }
                //return (single_log(d.date,d.subject,d.page_number,d.time,d.feedback))
              })}
              <Typography>{first}</Typography>
              {d1.map((d) => {
                return single_log(
                  d.date,
                  d.subject,
                  d.page_number,
                  d.time,
                  d.feedback
                );
              })}
               <Typography>{day1}</Typography>
              {d2.map((d) => {
                return single_log(
                  d.date,
                  d.subject,
                  d.page_number,
                  d.time,
                  d.feedback
                );
              })}
               <Typography>{day2}</Typography>
              {d3.map((d) => {
                return single_log(
                  d.date,
                  d.subject,
                  d.page_number,
                  d.time,
                  d.feedback
                );
              })}
               <Typography>{day3}</Typography>
              {d4.map((d) => {
                return single_log(
                  d.date,
                  d.subject,
                  d.page_number,
                  d.time,
                  d.feedback
                );
              })}
               <Typography>{day4}</Typography>
              {d5.map((d) => {
                return single_log(
                  d.date,
                  d.subject,
                  d.page_number,
                  d.time,
                  d.feedback
                );
              })}
               <Typography>{day5}</Typography>
              {d6.map((d) => {
                return single_log(
                  d.date,
                  d.subject,
                  d.page_number,
                  d.time,
                  d.feedback
                );
              })}
               <Typography>{last}</Typography>
              {d7.map((d) => {
                return single_log(
                  d.date,
                  d.subject,
                  d.page_number,
                  d.time,
                  d.feedback
                );
              })}
            </div>
          </div>
        </TabPanel>
        <TabPanel
          style={{ height: "100%" }}
          value={value}
          index={1}
          dir={theme.direction}
        >
          <div
            style={{
              display: "grid",
              backgroundColor: "#F2DC99",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <TextField
              style={{
                backgroundColor: "#9bcaf2",
                margin: "20px",
                textAlign: "center",
              }}
              id="outlined-multiline-static"
              label="Week Objective"
              multiline
              rows={4}
              defaultValue="Ganbare"
              variant="outlined"
            />
            <div
              style={{
                margin: "20px",
              }}
              id="daily_list_container"
            >
              {data.map((d) => {
                {
                  console.log(
                    "Start day :" +
                      first +
                      " with " +
                      d.date +
                      " Last day: " +
                      last
                  );

                  if (d.date === "" + curr.getDate()) {
                    return (
                      <div>
                        <p>{d.date}</p>
                        {single_log(
                          d.date,
                          d.subject,
                          d.page_number,
                          d.time,
                          d.feedback
                        )}
                      </div>
                    );
                  }
                }
              })}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          <Fab
            onClick={handleClickOpen}
            id="animated_tab_fab"
            aria-label={fab.label}
            className={fab.className}
            color={fab.color}
          >
            {fab.icon}
          </Fab>
        </Zoom>
      ))}

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

function single_log(date, subject, page_number, time, feedback, state) {
    
  return (

    <SimpleAccordion
      style={{ margin: "20px" }}
      date={date}
      subject={subject}
      page_number={page_number}
      time={time}
      feedback={feedback}
    />
  );
}
