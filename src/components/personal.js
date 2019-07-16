import React, { Component } from 'react';
import '../css/personal.css';


class Personal extends Component {
	// componentDidMount(){
	// 	setTimeout(() => document.getElementById('personal').classList.add('stretch'), 1000)
		
	// }

	render(){
	  return (
	    <div id="personal" className="toStretch">
	      <p>Born December 23rd, 1985</p>
	      <p>Torres Vedras, Lisbon, Portugal</p>
	    </div>
	  );
	}  
}

export default Personal;
