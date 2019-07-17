import React, { Component } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFreeCodeCamp } from 'react-icons/fa';
import '../css/personal.scss';


class Personal extends Component {
	// componentDidMount(){
	// 	setTimeout(() => document.getElementById('personal').classList.add('stretch'), 1000)
		
	// }

	render(){
	  return (
	    <div id="personal" className="toStretch">
	    	<p>Welcome!</p> 
	    	<p className="text-justify">I built this page to show you some of my work as a Web Developer.</p>
	      	<p>Born December 23rd, 1985</p>
	      	<p>Torres Vedras, Lisbon, Portugal</p>
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
