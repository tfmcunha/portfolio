import React, { useState, useEffect } from 'react';
import ListItem from './droplist';
import SkillFile from '../assets/skills.json';

export default function Skills() {
	const [ skills, setSkills ] = useState([])

	useEffect(() => {
    	setSkills(SkillFile);      		     	    
  	}, [])
	
	return(
		<div className="box">
			<h3>SKILLS</h3>
			<ul>
			{skills.map((skill, index, arr) => 
		        <ListItem
		        	key={index}
		            idx={index}
		            item={skill.name}
		            timer={200}
		            lng={arr.length}
		        />
		    )}
        	</ul>		
		</div>
	);	
}