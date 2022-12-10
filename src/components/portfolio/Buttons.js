import React from "react";
import './Portfolio.scss'

function Buttons(props) {
    return (
        <div>
            <button className="flat-button" value={-1} onClick={props.handleIterate}>BACK</button>
            <button className="flat-button" value={1} onClick={props.handleIterate}>NEXT</button>
        </div>
    )
}

export default Buttons