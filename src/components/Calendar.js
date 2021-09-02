import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import Day from './Day';
import moment from 'moment';



export default class Calendar extends React.Component {
    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        selectedDay: null
    }


    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    }

    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        });
    }

    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();

    }

    render() {
        // Map the weekdays i.e Sun, Mon, Tue etc as <td>
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className='week-day'>{day}</td>
            )
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 80} className="Day">
                {""}
                </td>
            );
        }

        console.log("blanks: ", blanks);

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            daysInMonth.push(
                <Day num={d} currDay={this.currentDay() == d ? true : false}/>
            );
        }


        console.log("days: ", daysInMonth);

        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((d, i) => {
            return (
                <tr key={i*100}>
                    {d}
                </tr>
            );
        })

        return (
            <div className="calendar-container">
                <div className="calendar">
                    <div className='month-header'>
                        <h2 className='month-text'>{moment().format("MMMM")}</h2>
                    </div>
                    <table className="calendar-inner">
                        <thead>
                            <tr>
                                {weekdays}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='fillerRow'></tr>
                            {trElems}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}