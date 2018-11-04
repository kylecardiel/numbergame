import React from 'react';
import 'font-awesome/css/font-awesome.css'

const ProgressBar = props => {
    const percentSign = '%';
    let percentNumber = Math.round((props.usedNumbers.length/9)*100);

    let progressBar;
    if(percentNumber < 100){
        progressBar = 
                <div className="progress-bar" style={{width:percentNumber+percentSign}}></div>
    } else {
        progressBar = 
            <div className="progress-bar bg-success progress-bar-striped" style={{width:percentNumber+percentSign}}></div>
    }

    return (
        <div>
            <div className="progress">
                {progressBar}
            </div>
        </div>
    )
};

export default ProgressBar;