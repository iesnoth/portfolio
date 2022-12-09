import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './Home.scss';
import { useState } from 'react';

const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate')
const nameArray= ['']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br /> I'm
                    <img src={LogoTitle} alt="developer" />
                    lobodan
                    <br />
                    web developer
                </h1>
                <h2>What I do</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home