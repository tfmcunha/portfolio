import React, { useState, useEffect } from 'react';
import ProjectsData from '../assets/projects.json';
import ProjectDetails from '../components/projectDetails';
//import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';

export default function Projects(props) {
	const [mounted, setMounted ] = useState(false)
	const [projects, setProjects ] = useState([])
	const [currentProject, setCurrentProject ] = useState({})
	const [projectIndex, setProjectIndex ] = useState(0)
			
	useEffect(() => {
		const t = setTimeout(() => {
			setMounted(true)
		},1000)
		setProjects(ProjectsData)
		document.getElementById("title").innerHTML = document.getElementById("title").textContent+"'S PROJECTS"
		let startDist, endDist = 0
		function handleTouchStart(e) {		
			startDist = e.changedTouches[0].screenY
		}

		function handleTouchEnd(e) {			
			endDist = e.changedTouches[0].screenY
			if (startDist < endDist) { props.setPage(1)}
		}
		const pr = document.getElementById("pr")
		pr.addEventListener("touchstart", handleTouchStart)
		pr.addEventListener("touchend", handleTouchEnd)
		return () => {
			clearTimeout(t)
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
		<div id="pr" className={`subcontainer projects ${mounted ? "fadeIn" : ""}`}>			
			<div className="row">
				<div className="col-1 col-md-2"> 
					<div className="d-flex justify-content-center">
						<div className="arrows" onClick={() => backward()}>&lt;</div>
					</div>
				</div>
				<div className="col-10 col-md-8">
					{currentProject.id &&
						<ProjectDetails project={currentProject}/>
					}					
				</div>
				<div className="col-1 col-md-2"> 
					<div className="d-flex justify-content-center">
						<div className="arrows" onClick={() => forward()}>&gt;</div>										
					</div>
				</div>
			</div>
		</div>
	);	
}