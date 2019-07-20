import React, { Component } from 'react';
import ProjectsData from '../assets/projects.json';
import ProjectDetails from '../components/projectDetails';

export default class Projects extends Component {
	constructor(){
		super();
		this.state= {
			mounted: false,
			projects: [], 
			p: {}
		}
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({mounted: true})
		},1000)
		this.setState({
			projects: ProjectsData,
			p: ProjectsData[0]
		})
	}
	
	render() {		
		return(
			<div className={`subcontainer projects ${this.state.mounted ? "fadeIn" : ""}`}>
				<div className="row">
					<h3>PROJECTS</h3>
				</div>
				<div className="row">
					<div className="col-2"></div>
					<div className="col-8 border">
					{this.state.p.id &&
						<ProjectDetails project={this.state.p}/>
					}
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		);
	}
}

