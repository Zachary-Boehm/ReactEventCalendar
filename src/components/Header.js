import { useState } from 'react';
import PropTypes from 'prop-types';
import logo from './Images/calendar-interface.png';
import Button from './NavButton'

function Header({title}) {
    const[focus, setFocus] = useState([{id: 'Calendar', target: true, to: '/Calendar'}, {id: 'Events', target: false, to: '/Events'}, {id: 'Add Event', target: false, to: '/EventForm'}])

    const changeFocus = (id) => {
        setFocus(
            focus.map((focused) =>
                focused.id === id ? {...focused, target: true} : {...focused, target: false}
            )
          )
    }

    return (
        <div className='edge shadow rowCenter'>
            <div className='nav rowCenter'>
                <div className='title rowCenter'>
                    <img className='orangeImage' src={logo} alt='logo' />;
                    <h1>{title}</h1>
                </div>
                <div className='rowCenter'>
                    {focus.map((focused) => 
                        <Button title={focused.id} focus={focused.target} target={focused.to} onFocus={changeFocus} />                  
                    )}
                    
                </div>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'Event Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
