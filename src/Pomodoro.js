import React from 'react';
import './App.css';

export default class App extends React.Component{
	constructor(){
		super();
		this.state = {
			time : 25,
			name : 'The code time!'
		};
		//binding basics
		this.codeTime = this.codeTime.bind(this);
		this.socialTime = this.socialTime.bind(this);
		this.coffeeTime = this.coffeeTime.bind(this);
		//binding tmer
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
	}

	//code Time
	codeTime = () => {
		this.setState({
			time : 25,
			name : 'The code time!'
		});
	}

	//social Time
	socialTime = () => {
		this.setState({
			time : 15,
			name : 'The social time!'
		});
	}

	//coffee time
	coffeeTime = () => {
		this.setState({
			time : 5,
			name : 'The coffee time!'
		});
	}
	componentDidMount() {
  	  // this.intervalId = setInterval(this.starTimer, 1000);
  	  // this.startTimer();
 	}
	// start timer
	startTimer = () => {
		var count = this.state.time;
		count *= 60;
		var counter = setInterval(timer,1000);

		function timer(){
			count -= 1;
			if(count === 0){
				clearInterval(counter);
				this.setState({
					time:25,
					name : this.state.name
				});
			}
			if(count%60>=10){
				let c = Math.floor(count/60) + ":" + count%60;
				// console.log("c : " + c);
				this.setState({
					time : c
				});
			}else{
				let cd = Math.floor(count/60) +":0" + count%60;
				// console.log("cd : "+cd);
				this.setState({
					time : cd
				});
			}
		}
	}

	componentWillUnmount(){
	    clearInterval(this.counter);
	}

	// //stop time
	stopTimer = () => {
		clearInterval(this.counter);
	}

	render(){
		return(
			<div className="text-center">
				<div>
					<h1>{this.state.time}</h1>
					<p>{this.state.name}</p>
				</div>
				<div>
					<button className="btn btn-primary active" onClick={this.codeTime}>Code</button>
					<button className="btn btn-primary" onClick={this.socialTime}>Social</button>
					<button className="btn btn-primary" onClick={this.coffeeTime}>Coffee</button>
				</div>
				<h2>
					<button className="btn btn-success btn-circle active" onClick={this.startTimer}><span className="glyphicon glyphicon-play"></span></button>
					<button className="btn btn-danger btn-circle" onClick={this.stopTimer}><span className="glyphicon glyphicon-pause"></span></button>
				</h2>
			</div>
		)
	}
}