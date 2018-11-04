import React from 'react';
import './Numbers.css';
import _ from 'lodash'

const Numbers = props => {
    const numberClassName = number => {
        const numberAreUsed = props.usedNumbers.indexOf(number) >= 0;
        if(numberAreUsed){
            return 'used-Number';
        }
        const numberIsSelected = props.selectedNumbers.indexOf(number) >= 0;
        if(numberIsSelected){
            return 'selected-Number';
        }
    };

    return (
        <div className="card text-center">
           <div>
               {Numbers.list.map((number, i) => 
                    <span key={i} className={numberClassName(number)} 
                    onClick={() => props.selectNumber(number)}
                    
                    >{number}</span>)}
           </div>
        </div>
    )
};

Numbers.list = _.range(1,10);

export default Numbers;