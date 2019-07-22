import React, { useState, useEffect } from 'react';
import ProjectsData from '../assets/projects.json';
import ProjectDetails from '../components/projectDetails';

export default function Projects() {
	const [mounted, setMounted ] = useState(false)
	const [projects, setProjects ] = useState([])
	const [currentProject, setCurrentProject ] = useState({})
			
	useEffect(() => {
		setTimeout(() => {
			setMounted(true)
		},1000)
		setProjects(ProjectsData)
		setCurrentProject(ProjectsData[5])		
	}, [currentProject])	
	
	return(
		<div className={`subcontainer projects ${mounted ? "fadeIn" : ""}`}>
			<div className="row">
				<h3>PROJECTS</h3>
			</div>
			<div className="row">
				<div className="col-2"></div>
				<div className="col-8 border">
				{currentProject.id &&
					<ProjectDetails project={currentProject}/>
				}
				</div>
				<div className="col-2"></div>
			</div>
		</div>
	);	
}