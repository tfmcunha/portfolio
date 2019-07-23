import React, { useState, useEffect } from 'react';
import ProgressBar from './progressbar';
import SkillFile from '../assets/skills.json';

export default function Skills() {
	const [ skills, setSkills ] = useState([])

	useEffect(() => {
    	setSkills(SkillFile);      		     	    
  	}, [])
	
	return(
		<div className="box">
			<h3>SKILLS</h3>
			{
				skills.map((skill, index) => 
					<ProgressBar
						key={index} 
						value={skill.value}
						label={skill.name}
						timer={(index+1)*200}
					/>
				)
			}
		</div>
	);	
}