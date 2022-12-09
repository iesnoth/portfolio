import AnimatedLetters from "../animatedLetters/Animated"

const About = () => {
    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
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