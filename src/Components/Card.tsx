import React from 'react';
import useDate from '../Hooks/useDate';
import Add from './Add';
import "./Card.css"
import Task from './Task';
type dateObjectFormat={
    month:string,
    day:string,
    dateValue:number,
    year:number
}
function Card():JSX.Element {
    const date:dateObjectFormat = useDate();
    return (
        <div className='card'>
            <div className='date-day'>          
             <div className='date-month-year'>
            <span className='dateValue'>{date.dateValue}</span>
            <div className='month-year'>
                <span className='monthValue'>{date.month}</span>
                <span className='yearValue'>{date.year}</span>
            </div>
             </div>
             <div className='day'>
              <span className='dayValue'>{date.day}</span>
             </div>
            </div>
            <Task/>
           <Add/>
        </div>
    );
}

export default Card;