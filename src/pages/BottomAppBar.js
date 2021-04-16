import React from 'react';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import firebase from "firebase/app";
import { withRouter, Redirect } from "react-router";
import Box from '@material-ui/core/Box';
import Listing from './components/Listing';
import AddLogDialog from '../pages/components/dialogs/FullScreenDialog';
import PinnedSubheaderList from './components/Listing_2';
import Profile from './components/profile/index';
import OnWorking from './components/imgs/Work_in_progress_svg.png';
import { Container } from '@material-ui/core';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
    paddingTop: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  var currentUser = null;
    var email = null;
    var login_logout = "LOGIN";
    if(firebase.auth().currentUser){
      currentUser = firebase.auth().currentUser
      email = firebase.auth().email
      login_logout = "DISCONNECT";
    }
  if (currentUser===null) {
    return <Redirect to="/sign-in" />;
  } 
  return (
    <React.Fragment>
      <CssBaseline />
      <div styles={{ }} className={classes.root}>
        <AppBar position="sticky" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="This Week" {...a11yProps(0)} />
            <Tab label="Today" {...a11yProps(1)} />
            <Tab label="Account" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div style={{marginTop:'130'}} >
            <Listing />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Container style={{textAlign:"center", marginTop:"150px"}} maxWidth="lg">
              <img alt="working" src={OnWorking} width="200px" />
            </Container>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Profile/>
          </TabPanel>
        </SwipeableViews>
      </div>
      < AddLogDialog style={{position: 'fixed'}} />
    </React.Fragment>
  );
}
