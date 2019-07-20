import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function ProjectDetails({project}) {
	return(
		<Fragment>
			<div className="row">
			</div>
			<div className="row">
				<img className="img-fluid" src={require(`../assets/images/project${project.id}.png`)}/>
			</div>
		</Fragment>
	);
}

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired
};