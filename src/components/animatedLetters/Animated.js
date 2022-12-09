import './Animated.scss'
//function maps over array of letters and returns the one specified by the index
// 3 arguments: class to apply, array of characters, index starting point: set delay for animation
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

 export default AnimatedLetters