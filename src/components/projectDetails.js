import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { IoMdPricetag } from 'react-icons/io';

export default function ProjectDetails({project}) {
	return(
		<Fragment>
			<div className="row">
				<div className="col-12">
					<h5>{project.title}</h5>
					<div>{project.description}</div>
					<div className="d-flex justify-content-center tags">
					{
						project.tags.map((tag, i) => 
							<div key={i}><IoMdPricetag/>{tag}</div>
						)
					}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12"> 
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