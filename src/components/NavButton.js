import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function NavButton({title, target, focus, onFocus}) {
    return (
        <div>
           <Link to={target} className={`btn ${focus && 'bFocus'}`} onClick={() => onFocus(title)} >{title}</Link> 
        </div>
    )
}

NavButton.propTypes = {
    title: PropTypes.string,
    focus: PropTypes.bool,
    target: PropTypes.string.isRequired,
}
NavButton.defaultProps = {
    title: 'Default',
    target: '/Calendar',
    focus: false,
}
export default NavButton
