const React = require('react');
const NavLink = require('react-router-dom').NavLink;

//A stateless functional component
function Nav() {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activClassName='active' to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activClassName='active' to='/battle'>
                    Battle
                </NavLink>
            </li>
            <li>
                <NavLink activClassName='active' to='/popular'>
                    Popular
                </NavLink>
            </li>
        </ul>
    )
}

module.exports = Nav;
