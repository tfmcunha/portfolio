import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(){
		super()
		this.state = {hasErrors: false}
	}
	static getDerivedStateFromError(error){
		return {hasErrors: true}
	}

	componentDidCatch(error){
		console.log("ERRO: ",error)
	}

	render(){
		return(
			this.state.hasErrors
			? <div>Erros</div>
			: this.props.children	
		)		 
	}
}

export default ErrorBoundary;