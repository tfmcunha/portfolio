import React, { Component } from 'react';
import Skills from '../components/skills';
import Education from '../components/education';


class Bio extends Component {
	constructor(){
		super();
		this.state= {
			mounted: false
		}
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({mounted: true})
		},1000)
	}
	
	render(){
		return(
			<div className={`row subcontainer pb-4 ${this.state.mounted ? "fadeIn" : ""}`}>			
				<div className="col-md-6 order-2 order-md-1">
					<div className="row mt-3">
						<div className="col">
							<Education />
						</div>
					</div>

					<div className="row mt-3">
						<div className="col">
							<div className="box">
								<h3>PROJECTS</h3>
								<div>
									This portfolio is a work in progress. Meanwhile, you can check some of my work in my <a href="https://tfmcunha.github.io/portfolio_old/" target="_blank" rel="noopener noreferrer">old portfolio</a>.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 mt-3 order-1 order-md-2">
					<Skills />
				</div>
			</div>
		);
	}
}

export default Bio;