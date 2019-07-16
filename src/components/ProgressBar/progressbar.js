import React from 'react';
import './style.css';

class ProgressBar extends React.Component {
  constructor() {
    super();
    this.state = {value: ""}
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        value: this.props.value
      })
    },1000)
    
  }
  render(){
    return(
      <div style={{padding: "5px"}}>
        <div className="progressBar">
          <div className="progressBarFill" style={{width: `${this.state.value}%`}}>
            <div className="label">{this.props.label}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
