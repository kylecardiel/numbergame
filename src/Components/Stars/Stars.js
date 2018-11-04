import React from 'react';
import 'font-awesome/css/font-awesome.css'
import './Stars.css';
import _ from 'lodash'

const Stars = props => {
    
    return (
        <div className="col-5">
            {_.range(props.randomNumberOfStars).map((number, i) => 
                <i key={i} className="fa fa-star"></i>)}
        </div>
    )

};

export default Stars;