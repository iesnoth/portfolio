import './About.scss'
import AnimatedLetters from "../animatedLetters/Animated"
import { useState, useEffect } from "react"
import {
    faCss3,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faPenNib,faPalette } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const setClass = async () => {
            return setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        };

        setClass()
    }, [])

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>blag</p>
                <p>ergh</p>
                <p>ertherh</p>
            </div>

            <div className='stage-cube'>
                <div className='cube-spinner'>
                    <div className="face1">
                        <FontAwesomeIcon icon={faPenNib} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faPalette} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About