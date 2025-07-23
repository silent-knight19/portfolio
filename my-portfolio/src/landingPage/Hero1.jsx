import React from 'react'
import '../styles/Hero1.css'

function Hero() {
    return (
        <div className="hero-container" style={{display:"flex"}}>
            <div className="left-side" style={{width:"50%"}}>
                
                <div className="left-top" style={{height:"50%"}}>
                    <h1>Left Top</h1>
                </div>
                
                <div className="left-bottom" style={{height:"50%"}}>
                    <h1>Left Bottom</h1>
                </div>
            </div>
            
            <div className="right-side" style={{width:"50%"}}>
                <h1>Right Side</h1>
            </div>
        </div>
    )
}

export default Hero;