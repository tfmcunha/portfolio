import React, { Component } from 'react';
import Intro from '../components/intro';
import Bio from './bio';
import Projects from '../components/projects';

import '../css/main.scss';

class Main extends Component {
	constructor(){
		super();
		this.state = {
			page: 1
		}
	}

	componentDidMount(){
		document.addEventListener('mousewheel', this.setPage)
	}

	setPage = (evt) => {
		if (evt.deltaY < 0) {
			this.state.page !== 1 && this.setState({page: 1})
		} else {
			this.state.page !== 2 && this.setState({page: 2})			
		}
	}

	changePage(page) {
		switch(page) {
			case 1:
				return <Bio />;				
			case 2:
				return <Projects />
			default: 
				return <Bio />;
		}
	}

	render(){
		return (
			<main className="row">    
				<header>
					<div>TIAGO CUNHA</div>
					<span>Web Developer</span>
				</header>	

				<div className="col-md-3">
					<Intro page={this.state.page}/>
				</div>

				<div className={this.state.page === 1 ? "col-md-9" : "col-md-12"}>
					{this.changePage(this.state.page)}				
				</div>
			</main>
		);
	}
}

export default Main;
