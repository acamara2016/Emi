import React, { useCallback} from "react";
import SimpleAccordion from "./components/Accordion";
import AnimatedTabs from './components/AnimatedTab';
import { makeStyles } from '@material-ui/core/styles';
import disconnect, { writeUserData } from './components/firebase';

import Button from '@material-ui/core/Button';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  
  componentDidMount() {
  
  }
  componentDidUpdate() {}
  render() {

    return (
      <div style={{ 
        backgroundColor: "#F2DC99",
        position: "absolute",
        left: "0",
        width: "100%",
        overflow: "hidden",
       }}>
        <AnimatedTabs/>
      </div>
      
    );
  }
}


