import React from 'react';
import Personal from '../components/personal';
import Skills from '../components/skills';
import Education from '../components/education';
import Projects from '../components/projects';
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
      		<div className="row subcontainer pb-4">
      			<div className="col-md-6 ">
      				<div className="row mt-3">
                <div className="col">
                  <Education />
                </div>
              </div>
      				<div className="row mt-3">
                <div className="col">
                  <Projects />
                </div>
              </div>
      			</div>
      			<div className="col-md-6 mt-3">
      				<Skills />
      			</div>
      		</div>
      	</div>
    </main>
  );
}

export default Main;
