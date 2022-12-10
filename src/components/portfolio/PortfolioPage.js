import './Portfolio.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animatedLetters/Animated'
import Buttons from './Buttons'
import ArtPieces from './ArtPieces.js'

const PortfolioPage = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    let [artId, setArtId] = useState(1)
    let gallery = ArtPieces

    //need a map function here that iterates over the gallery and gets the
    //info for each piece based on the id

    const handleIterate = (e) => {
        setArtId(artId + Number(e.target.value))
    }

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
                            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                            idx={15}
                        />
                    </h1>
                </div>
            </div>
            <div className='art-area'>
                <Buttons handleIterate={handleIterate}/>
            </div>
            <Loader type="ball-scale-multiple" />
        </>
    )
}

export default PortfolioPage