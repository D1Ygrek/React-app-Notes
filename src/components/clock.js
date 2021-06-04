import React, { Component } from "react";
import './clock.css'
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "0",
    };
  }
  
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.normalTime();
  }
  normalTime(){
      let d = new Date();
      let hours = d.getHours();
      let minutes = d.getMinutes();
      if(hours<10){hours="0"+hours};
      if(minutes<10){minutes="0"+minutes};
      let res=hours+':'+minutes;
      this.setState({
          time:res,
      });
  }
  render() {
    return <p className="App-clock">{this.state.time}</p>;
  }
}

export default Clock;