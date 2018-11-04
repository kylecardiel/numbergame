import React from 'react';
import 'font-awesome/css/font-awesome.css'

const DoneStatus = props => {
    
    return (
        <div className="text-center">
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-secondary" onClick={props.resetGame}>
                Play Again
            </button>
        </div>
    )

};

export default DoneStatus;