import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {currentCount: 10}
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if(this.state.currentCount < 1) { 
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  render() {
    return(
      <div style={{color:'red', fontSize:'40', textAlign:'center', marginTop:'200'}}>{this.state.currentCount}</div>
    );
  }
}