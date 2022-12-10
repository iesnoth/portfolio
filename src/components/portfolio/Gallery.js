import React, { useState, useEffect } from 'react'
import Buttons from './Buttons';
import './Portfolio.scss';
import ArtPieces from './ArtPieces';

function Gallery() {
    let gallery= ArtPieces
    let [index, setIndex] = useState(0)
    // let [artId, set] = useState({})

//   useEffect(() => {
//     gallery[index]
//       return(
//         <div>blah</div>
//       )
//   }, [index])



  const handleIterate = (e) => {
    setIndex(index + Number(e.target.value))
  }

  return (

    <div className="App">
           { gallery.map((art) => {
        return (
            <>
            <img src={art.url} alt={art.title}/>
            <p>{art.title}</p>
            </>
        )
        })}

      <Buttons handleIterate = {handleIterate} />
    </div>
  );
}

export default Gallery;