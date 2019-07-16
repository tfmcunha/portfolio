import React from 'react';
import Personal from '../components/personal';
import Skills from '../components/skills';
import '../css/main.scss';

function Main() {
  return (
    <main className="row">    
    	<header>
    		<div>TIAGO CUNHA</div>
    		<span>Web Developer</span>
    	</header>	
    	<div className="col-md-3">
      		<Personal />
      	</div>
      	<div className="col-md-9">
      		<div className="row subcontainer">
      			<div className="col-md-6 border">
      				<div className="row border">1</div>
      				<div className="row border">2</div>
      			</div>
      			<div className="col-md-6 border">
      				<Skills />
      			</div>
      		</div>
      	</div>
    </main>
  );
}

export default Main;
