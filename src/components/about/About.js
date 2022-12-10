import './About.scss'
import AnimatedLetters from "../animatedLetters/Animated"
import { useState, useEffect } from "react"

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

        useEffect(() => {
            const setClass = async () => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)};

        setClass()
      }, [])

    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>blag</p>
                <p>ergh</p>
                <p>ertherh</p>
            </div>
        </div>
    )
}

export default About