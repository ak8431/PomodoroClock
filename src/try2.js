import React from 'react';
import './App.css';
import $ from 'jquery';

export default class TestClock extends React.Component{
	componentDidMount(){
		$(document).ready(function() {
		    var buzzer = $("#buzzer")[0];
		    $("#reset").hide();
		    var count = parseInt($("#num").html());

		    //creating timer
		    $("#start").click(function() {
		        var counter = setInterval(timer, 1000);
		        count *= 60;

		        function timer() {
		            $("#minus5Clock, #add5Clock, #title1, #start, #reset").hide();
		            $("#timeType").show();
		            $("#timeType").html("Session Time : ");
		            count -= 1;
		            if (count === 0) {
		                buzzer.play();
		                clearInterval(counter);	
		                $("#num, #timeType").hide();
		                $('#reset').show();
		            }
		            if (count % 60 >= 10) {
		                $("#num").html(Math.floor(count / 60) + ":" + count % 60);
		            } else {
		                $("#num").html(Math.floor(count / 60) + ":0" + count % 60);
		            }

		        }
		    });

		    //reset
		    $("#reset").click(function() {
		        count = 5;
		        $("#num").html(count);
		        $("#add5Clock, #minus5Clock, #title1, #start, #num").show();
		        $("#reset").hide();
		    });

		    //Session Time
		    $("#minus5Clock").click(function(e) {
		        e.preventDefault();
		        if (count > 0) {
		            count -= 1;
		            $("#num").html(count);
		        }
		    });

		    $("#add5Clock").click(function(e) {
		        e.preventDefault();
		        if (count < 25) {
		            count += 1;
		            $("#num").html(count);
		        }
		    });

		});
	}

	render(){
		return(
			<div>
				<audio id="buzzer" src="http://codingtutorials360.com/14244764.mp3" type="audio/mpeg"></audio>
				<div className="text-center">
				    <h1>Build Pomodoro Clock</h1>
				    <h3 id="timeType"></h3>
				    <div id="timeDiv">
				        <h2 id="title1">Session Time</h2><br />
				        <a href="#" className="btn btn-primary btn-sm" id="minus5Clock">-</a>
				        <h2 id="num">5</h2>
				        <a href="#" className="btn btn-primary btn-sm" id="add5Clock">+</a>
				    </div>
				    <a href="#" className="btn btn-primary" id="start">Start</a>
				    <a href="#" className="btn btn-primary" id="reset">Reset</a>
				</div>
			</div>
		)
	}
}