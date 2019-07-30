import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { IoMdPricetag, IoLogoGithub } from 'react-icons/io';

export default function ProjectDetails({project}) {
	return(
		<Fragment>
			<div className="row pt-2">
				<div className="col-12 text-center">
					<h4>
						{project.repo && 
							<a href={`https://github.com/tfmcunha/${project.repo}`} target="_blank" rel="noopener noreferrer">
								<IoLogoGithub/>
							</a>
						} {project.title}
					</h4>
					<div className="row text-center">
						<div className="col"><b>Date</b>: {project.date}</div>
						<div className="col"><b>Client</b>: {project.company}</div>
						<div className="col"><b>Platform</b>: {project.platform}</div>
					</div>
					<div className="d-flex justify-content-center tags m-2">
					{
						project.tags.map((tag, i) => 
							<div key={i}><IoMdPricetag/>{tag}</div>
						)
					}
					</div>
					{
						project.platform === "Heroku" && 
						<div>*App might be in suspension and take some time to load. Refresh may be necessary</div>
					}
					
				</div>
			
				<div className="col-12 border p-2"> 
						<a href={project.plink} target="_blank" rel="noopener noreferrer">
							<img className="img-fluid" src={require(`../assets/images/project${project.id}.png`)} alt="project"/>
						</a>
					
				</div>
			</div>
		</Fragment>
	);
}

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired
};