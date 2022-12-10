import React from "react";

function Gallery(props){
    return(
        <div>         
            <img id= "gallery" src ={props.url} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.date}</p>
        </div>
    )
}

export default Gallery