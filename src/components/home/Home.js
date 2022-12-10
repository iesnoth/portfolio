import { Link } from 'react-router-dom';
import './Home.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../animatedLetters/Animated'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'e', 's', 'n', 'o', 't', 'h']
    const jobArray = ['c', 'r', 'e', 'a', 't', 'o', 'r', ' ', 'e', 'x', 't', 'r', 'a', 'o', 'r', 'd', 'i', 'n', 'a', 'i', 'r', 'e']

    //runs hover effect after 4 seconds, only runs once
    useEffect(() => {
        const setClass = async () => {
            return setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 5000)
        };

        setClass()
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1 className='my-name'>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                </h1>
                <h2 className='pronunciation'> pronounced: ee-es-nuth</h2>
                <h1><AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} /></h1>
                <h2>Writer/Character Designer/Illustrator/Game Developer/Computer Programmer</h2>
                <Link to="/contact" className='flat-button'>SEND YOUR INQUIRIES</Link>
            </div>
        </div>
    );
}

export default Home