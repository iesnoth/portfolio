import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom';
import Avatar from '../../assets/images/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTumblr } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return(
        <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Avatar} alt="logo"/>
            <h2 className="sub-logo">iesnoth</h2>
        </Link>
        <nav>
            {/* using icons from fontawesome package */}
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/victoria-beasley-codes/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/iesnoth'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://iesnoth.tumblr.com/tagged/artz'>
                    <FontAwesomeIcon icon={faTumblr} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        </div>
    )
}

export default Sidebar;