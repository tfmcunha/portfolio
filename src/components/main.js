import React, { useState, useEffect } from 'react';
import Intro from '../components/intro';
import Bio from './bio';
import Projects from '../components/projects';

import '../css/main.scss';

export default function Main() {
	const [ page, setPage ] = useState(1);	

	useEffect(()=>{
		document.addEventListener('mousewheel', currentPage)
	}, [page])	

	function currentPage(evt){
		if (evt.deltaY < 0) {
			page !== 1 && setPage(1)
		} else {
			page !== 2 && setPage(2)			
		}
	}

	function changePage(page) {
		switch(page) {
			case 1:
				return <Bio />;				
			case 2:
				return <Projects />
			default: 
				return <Bio />;
		}
	}
	
	return (
		<main className="row">    
			<header>
				<div>TIAGO CUNHA</div>
				<span>Web Developer</span>
			</header>	

			<div className="col-md-3">
				<Intro page={page}/>
			</div>

			<div className={page === 1 ? "col-md-9" : "col-md-12"}>
				{changePage(page)}				
			</div>
		</main>
	);	
}