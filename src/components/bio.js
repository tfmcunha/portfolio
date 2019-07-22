import React, { useState, useEffect } from 'react';
import Skills from '../components/skills';
import Education from '../components/education';

export default function Bio() {
	const [ mounted, setMounted ] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setMounted(true)
		},1000)
	})	
		
	return(
		<div className={`row subcontainer pb-4 ${mounted ? "fadeIn" : ""}`}>			
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