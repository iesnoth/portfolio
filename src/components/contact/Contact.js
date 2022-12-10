import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../animatedLetters/Animated'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const setClass = async () => {
            return setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        };

        setClass()
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        // this isn't working atm, I'll figure it out later when I can look into emailjs more
        emailjs
            .sendForm(
                'gmail',
                'template_zgvn0qz',
                refForm.current,
                'TOKEN'
            )
            .then(
                () => {
                    alert('Missive sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send, please try again.')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            letterClass={letterClass}
                            idx={15} />
                    </h1>
                    <p>alkgwenpbnwpernbp</p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='E-mail' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Write your query' name='missive' required></textarea>
                                </li>
                                <input type="submit" className='flat-button' value='SEND' />
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Victoria Beasley,
                    <br />
                    USA,
                    <br />
                    Anywhere,Anyplace<br />
                    <span>iesnoth91@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[36.1320977604213, -115.18148751959828]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[36.1320977604213, -115.18148751959828]}>
                            <Popup>Dream vacation.</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="ball-scale-multiple" />
        </>
    )
}

export default Contact