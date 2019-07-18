import React, {Component} from 'react';
import ProgressBar from './progressbar';
import SkillFile from '../assets/skills.json';

class Skills extends Component {
	constructor() {
	    super();
	    this.state = {
	      	skills: []
	    }
	} 

	componentDidMount() {
    	this.setState({
      		skills: SkillFile
   		});      		     	    
  	}

	render() {
		return(
			<div className="box">
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