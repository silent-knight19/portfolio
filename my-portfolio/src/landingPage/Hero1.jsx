import React from 'react'
import '../styles/Hero1.css'

function Hero() {
    return (
        <div className="hero-container">
            <div className="left-side">
                
                <div className="left-top" style={{height:"50%"}}>
                    
                    <p>I'm a skilled MERN stack developer with hands-on experience building modern, scalable web applications. From crafting clean, responsive UIs with React and Tailwind CSS to designing robust RESTful APIs with Express and Node.js, I handle both frontend and backend with confidence. I work fluently with MongoDB for efficient data modeling and use tools like JWT and middleware for secure, production-ready authentication systems. I prioritize performance, maintainable code, and clean architecture. Always curious, I go beyond the basics—diving into best practices, debugging edge cases, and optimizing workflows to deliver high-quality, full-stack solutions that scale in the real world.</p>
                </div>  
                
                <div className="left-bottom" style={{height:"50%"}}>
                    <div className="stat-box">
                        <h1>4+</h1>
                        <p>full stack projects</p>
                    </div>
                    <div className="stat-box">
                        <h1>2+</h1>
                        <p>years of experience</p>
                    </div>
                </div>
            </div>
            
            <div className="right-side" style={{width:"50%"}}>
                <img src="photo.png" alt="photo" />
            </div>
        </div>
    )
}

export default Hero;