import React, { useState, useEffect } from 'react';
import ProjectsData from '../assets/projects.json';
import ProjectDetails from '../components/projectDetails';

export default function Projects() {
	const [mounted, setMounted ] = useState(false)
	const [projects, setProjects ] = useState([])
	const [currentProject, setCurrentProject ] = useState({})
	const [projectIndex, setProjectIndex ] = useState(0)
			
	useEffect(() => {
		setTimeout(() => {
			setMounted(true)
		},1000)
		setProjects(ProjectsData)
		document.getElementById("title").innerHTML = document.getElementById("title").textContent+"'S PROJECTS"
		return () => {
			document.getElementById("title").innerHTML = "TIAGO CUNHA"
		}
	}, [])	

	useEffect(() => {
		setCurrentProject(ProjectsData[projectIndex])	
	}, [projectIndex])


	function backward() {
	    let i = -1
	    if (projectIndex > 0) {
		    setProjectIndex(projectIndex+i)
	    } else {
	    	setProjectIndex(projects.length-1)
	    }      
	}

	function forward() {
	    let i = 1
	    if (projectIndex < projects.length-1) {
	        setProjectIndex(projectIndex+i)
	    } else {
	        setProjectIndex(0)
	    }  
	}
	
	return(
		<div className={`subcontainer projects ${mounted ? "fadeIn" : ""}`}>
			{/*<div className="row">
				<div className="col"><h3 className="text-center">PROJECTS</h3></div>
			</div>*/}
			<div className="row">
				<div className="col-1 col-md-2 d-flex justify-content-center align-items-center">
					<div className="arrows" onClick={() => backward()}>«</div>
				</div>
				<div className="col-10 col-md-8">
					{currentProject.id &&
						<ProjectDetails project={currentProject}/>
					}
					
				</div>
				<div className="col-1 col-md-2 d-flex justify-content-center align-items-center">
					<div className="arrows" onClick={() => forward()}>»</div>
				</div>
			</div>
		</div>
	);	
}