import { useState } from 'react';
import PropTypes from 'prop-types'
import Day from './CalendarDay'
import moment from 'moment'

function Calendar({ }) {
    
    let weekdayshort = moment.weekdays();
    let weekdayshortname = weekdayshort.map(day => {
        return (
            <th key={day} className="week-day">
                {day}
            </th>
        );
    });

    return (
        <div className='calendarContainer shadow' >
            <div className='dateSelector ' >
                <h2 className='date'>September</h2>
            </div>
            <div className='calendarArea' style={{backgroundColor: '#1D1E2C'}}>
                {weekdayshortname}
            </div>
        </div>
    )
}

Calendar.propTypes = {
    days: PropTypes.number.isRequired,
}
Calendar.defaultProps = {
    days: 31,
}

export default Calendar
