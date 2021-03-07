import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import app from './firebase';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import EditModal from './save_button';
import Fab from '@material-ui/core/Fab';
import ReactCardFlip from 'react-card-flip';
import HorizontalLinearStepper from './stepper';
import BadgeAvatars from "./BadgeAvatar";
function TabPanel(props) {
    var [isFlipped, setFlipped] = useState(0)
    useEffect(()=>{
        isFlipped=false;
        console.log(isFlipped);
    }, []);
    
    const {
        children,
        value,
        index,
        ...other
    } = props;
    const useStyles = makeStyles({
        root: {
            minWidth: 275
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)'
        },
        title: {
            fontSize: 14
        },
        pos: {
            marginBottom: 12
        }
    });

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={7}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`};
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    }
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [value,
        setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const people = [
        {
            name: 'chris'
        }
    ];
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var day1 = first + 1;
    var day2 = first + 2;
    var day3 = first + 3;
    var day4 = first + 4;
    var day5 = first + 5;
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(curr.setDate(first)).toUTCString();
    var day1_string = new Date(curr.setDate(day1)).toUTCString();
    var day2_string = new Date(curr.setDate(day2)).toUTCString();
    var day3_string = new Date(curr.setDate(day3)).toUTCString();
    var day4_string = new Date(curr.setDate(day4)).toUTCString();
    var day5_string = new Date(curr.setDate(day5)).toUTCString();
    var lastday = new Date(curr.setDate(last)).toUTCString();


    return (
        <div style={{
            height: "650px"
        }} className={classes.root}>

            <AppBar position="static">
                <Tabs
                    style={{
                    backgroundColor: "#F28B66"
                }}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="simple tabs example">
                    <Tab label={firstday} {...a11yProps(0)}/>
                    <Tab label={day1_string} {...a11yProps(1)}/>
                    <Tab label={day2_string} {...a11yProps(2)}/>
                    <Tab label={day3_string} {...a11yProps(3)}/>
                    <Tab label={day4_string} {...a11yProps(4)}/>
                    <Tab label={day5_string} {...a11yProps(5)}/>
                    <Tab label={lastday} {...a11yProps(6)}/>
                </Tabs>
            </AppBar>
            <BadgeAvatars/>
            <TabPanel value={value} index={0}>
                <Container
                    style={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center"
                }}>
                    <div>
                        {people.map(person => (
                            <Card
                                className={classes.root}
                                variant="outlined"
                                style={{
                                marginBottom: "30px",
                                maxWidth: "600px",
                                maxHeight: "400px",
                                minWidth: "300px",
                                minHeight: "100px"
                            }}>
                                <CardContent>
                                <TextField id="outlined-basic" label="Book Name" variant="outlined" />
                                </CardContent>
                                <CardActions>
                                    <EditModal size="small">Learn More</EditModal>
                                </CardActions>
                            </Card>
                            
                            
                        ))}
                        <Card
                           className={classes.root}
                                variant="outlined"
                                style={{
                                marginBottom: "30px",
                                maxWidth: "600px",
                                maxHeight: "600px",
                                minWidth: "300px",
                                minHeight: "400px"}}
                                >
                         <HorizontalLinearStepper>
                                
                                </HorizontalLinearStepper>
                        </Card>
                        <Fab variant="extended">
        自習室参加
      </Fab>
      <Button  onClick={() => app.auth().signOut()}>LOG-OUT</Button>
                    </div>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Three
            </TabPanel>
        </div>
    );
}