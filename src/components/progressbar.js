import React, { useState, useEffect } from 'react';
import '../css/progressbar.css';

export default function ProgressBar({label, value, timer}) {
  const [ val, setValue ] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setValue(value)
    },(1000+timer))    
  }, [value, timer])

  return(
    <div style={{padding: "5px"}}>
      <div className="progressBar">
        <div className="progressBarFill" style={{width: `${val}%`}}>
          <div className="label">{label}</div>
        </div>
      </div>
    </div>
  );  
}