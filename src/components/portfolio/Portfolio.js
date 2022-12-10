import './Portfolio.scss'
import {useState, useEffect} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animatedLetters/Animated'

const Portfolio = () => {
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
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P','o','r','t','f','o','l','i','o']}
                            idx={15}
                        />
                    </h1>
                </div>
                </div>
                <Loader type="ball-scale-multiple" />
            </>
    )
}

export default Portfolio