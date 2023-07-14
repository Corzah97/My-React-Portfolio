import React from 'react'
import "./spinningbox.css"
import jsImage from "../../assets/img/javascript-icon.png"
import reactImage from "../../assets/img/react-js-logo.png"

const SpinningBox = () => {
    return (
        <div className="spinning-box">

            <div className="box">
                <div className="front">
                    <img src={jsImage} alt="javascript-icon"/>
                </div>
                <div className="back">
                    <img src={reactImage} alt="react"/>
                </div>
            </div>
        </div>

    )
}

export default SpinningBox