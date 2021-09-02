
function Day({num, currDay}) {
    return (
        <td className={`Day ${currDay ? 'curDay' : 'normDay'}`}>
            <div className='day-container'>
                <h3 className='day-text'>{num}</h3>
            </div>
        </td>
    )
}

export default Day
