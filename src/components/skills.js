import React, {Component} from 'react';
import ProgressBar from './ProgressBar/progressbar';

class Skills extends Component {
	constructor() {
	    super();
	    this.state = {
	      	skills: []
	    }
	} 

	componentDidMount() {
    	fetch('../skills.json')
    	.then(response => response.json())
    	.then(myjson => {
      		this.setState({
      			skills: myjson
      		});
      		console.log(myjson)
     	});    
  	}

	render() {
		return(
			<div>
				<h3>SKILLS</h3>
				{
					this.state.skills.map((skill, index) => 
						<ProgressBar
							key={index} 
							value={skill.value}
							label={skill.name}
						/>
					)
				}
			</div>
		);
	}
}

export default Skills;