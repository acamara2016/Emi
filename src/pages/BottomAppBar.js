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
import AddLogDialog from './components/dialogs/DialogAddNote.js';
import Profile from './components/profile/index';
import OnWorking from './components/imgs/Work_in_progress_svg.png';
import { Container } from '@material-ui/core';
import BackgroundImage from './components/imgs/note_bg.jpg';
import Pagination from '@material-ui/lab/Pagination';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        style={{padding:'0px'}}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box style={{padding:'0px'}} div={3}>
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
  const params = [
    { name: 'Login', value: 'joe_public' },
    { name: 'Account ID', value: 'ABCD1234' },
    { name: 'Total order value', value: '$123' }
  ];
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  let curr = new Date ;
  //console.log(Date.getDaysInMonth(2021, 5));
    let week = [];
    
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i 
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      //slicing the last 2 digit from 2020-03-15
      week.push(day.slice(-2))
  }
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
      <div 
      style={{ 
        // backgroundImage: `url(${BackgroundImage})`, 
        // backgroundRepeat:'no-repeat', 
        // backgroundSize:'cover'
        // margin: '20px',
        // fontFamily: 'Lato',
        // background:'#666',
        // color:'#fff',
      }} 
        className={classes.root}>
        <AppBar  position="sticky" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            style={{backgroundColor:'#ff7043'}}
            class="nav md-pills nav-justified pills-deep-orange"
            textColor="secondary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="今月" {...a11yProps(0)} />
            <Tab label="今日" {...a11yProps(1)} />
            <Tab label="アカウント" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <main>
          <div  class="col-md-12">

            <ul class="nav md-pills nav-justified pills-deep-orange">
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel11" role="tab" aria-selected="false">1月</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel12" role="tab" aria-selected="false">2月</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " data-toggle="tab" href="#panel13" role="tab" aria-selected="true">行進</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#panel14" role="tab">4月</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel15" role="tab" aria-selected="false">五月</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel16" role="tab" aria-selected="false">六月</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel17" role="tab" aria-selected="true">ジュリー</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel18" role="tab">8月</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel19" role="tab" aria-selected="false">9月</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel20" role="tab" aria-selected="false">10月</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel21" role="tab" aria-selected="true">11月</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel22" role="tab">12月</a>
              </li>
            </ul>

            <div style={{padding:'0px', margin:'0px', backgroundColor:''}} class="tab-content">
              
              <div class="tab-pane fade in" id="panel11" role="tabpanel">
                <br/>

                <Listing jp="1月" monthName="January" month={1} current_month={31}  />

              </div>
              <div class="tab-pane fade active show" id="panel12" role="tabpanel">
                <br/>

                <Listing jp="2月" monthName="February" month={2} current_month={28}  />

              </div>
              <div class="tab-pane fade" id="panel13" role="tabpanel">
                <br/>

                <Listing jp="行進" monthName="March" month={3} current_month={31}  />

              </div>
              <div class="tab-pane fade" id="panel14" role="tabpanel">
                <br/>

                <Listing jp="4月" monthName="April" month={4} current_month={30}  />

              </div>
              <div class="tab-pane fade" id="panel15" role="tabpanel">
                <br/>

                <Listing jp="五月" monthName="May" month={5} current_month={31}  />

              </div>
              <div class="tab-pane fade" id="panel16" role="tabpanel">
                <br/>

                <Listing jp="六月" monthName="June" month={6} current_month={30}  />

              </div>
              <div class="tab-pane fade" id="panel17" role="tabpanel">
                <br/>

                <Listing jp="ジュリー" monthName="Jully" month={7} current_month={31}  />

              </div>
              <div class="tab-pane fade" id="panel18" role="tabpanel">
                <br/>

                <Listing jp="8月" monthName="August" month={8} current_month={31}  />

              </div>
              <div class="tab-pane fade" id="panel19" role="tabpanel">
                <br/>

                <Listing jp="9月" monthName="September" month={9} current_month={30}  />

              </div>
              <div class="tab-pane fade" id="panel20" role="tabpanel">
                <br/>

                <Listing jp="10月" monthName="October"  month={10} current_month={31}  />

              </div>
              <div class="tab-pane fade" id="panel21" role="tabpanel">
                <br/>

                <Listing jp="11月" monthName="November" month={11} current_month={30}  />

              </div>
              <div class="tab-pane fade" id="panel22" role="tabpanel">
                <br/>

                <Listing jp="12月" monthName="December" month={12} current_month={31} />

              </div>

            </div>

          </div>  
         
           
          </main>
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
      <AddLogDialog style={{position: 'fixed',}} />
    </React.Fragment>
  );

}
