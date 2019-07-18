import React, { Component } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFreeCodeCamp, FaMapMarkerAlt } from 'react-icons/fa';
import '../css/personal.scss';


class Personal extends Component {
	// componentDidMount(){
	// 	setTimeout(() => document.getElementById('personal').classList.add('stretch'), 1000)
		
	// }

	render(){
	  return (
	    <div id="personal" className="toStretch">
	    	<p className="text-center">Welcome!</p> 
	    	<p className="text-center"><i>"Do what you love, and you’ll never work another day in your life."</i></p>
	    	<p className="text-justify"> That is what I feel while in front of a computer writing code.<br />
	      	I created this page to showcase that passion.</p>
	      	<p><FaMapMarkerAlt/>Torres Vedras, Lisbon, Portugal</p>
	      	<div className="d-flex justify-content-around">
		    	<a href="mailto:tcunha_lp@hotmail.com"><FaEnvelope /></a>
		    	<a href="https://github.com/tfmcunha" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
		        <a href="https://www.linkedin.com/in/otiago-cunha/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
		        <a href="https://www.freecodecamp.org/tfmcunha" target="_blank" rel="noopener noreferrer"><FaFreeCodeCamp /></a>
	      	</div>
	    </div>
	  );
	}  
}

export default Personal;
