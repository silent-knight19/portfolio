import React from 'react';
import '../styles/Hero1.css';
import { FaCode, FaServer, FaMobileAlt, FaRocket } from 'react-icons/fa';

function Hero() {
    return (
        <div className="hero-container">
            <div className="left-side">
                <div className="left-top">
                    <h1 className="greeting">Hello, I'm <span className="highlight">Sachin</span></h1>
                    <h2 className="tagline">Full-Stack Developer & Problem Solver</h2>
                    
                    <p className="intro-text">
                        I specialize in crafting exceptional digital experiences through clean, efficient code and intuitive user interfaces. 
                        With expertise spanning the entire web development stack, I transform complex concepts into seamless, high-performance applications. 
                        My approach combines technical excellence with creative problem-solving to deliver solutions that not only meet but exceed user expectations.
                        Whether it's building responsive frontends with React, architecting robust backend systems with Node.js, or designing scalable databases, 
                        I'm passionate about creating technology that makes a real impact.
                    </p>
                    
                    <div className="expertise">
                        <div className="expertise-item">
                            <FaCode className="icon" />
                            <span>Frontend Development</span>
                        </div>
                        <div className="expertise-item">
                            <FaServer className="icon" />
                            <span>Backend Development</span>
                        </div>
                        <div className="expertise-item">
                            <FaMobileAlt className="icon" />
                            <span>Responsive Design</span>
                        </div>
                    </div>
                    
                    <button className="cta-button">
                        <FaRocket className="button-icon" />
                        <a href="https://www.linkedin.com/in/sachin-singh-2b980a376/" target="_blank" rel="noopener noreferrer">Let's Connect</a>
                    </button>
                </div>  
                
                <div className="left-bottom">
                    <div className="stat-box">
                        <h1>4+</h1>
                        <p>Full Stack Projects</p>
                    </div>
                    <div className="stat-box">
                        <h1>2+</h1>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-box">
                        <h1>10+</h1>
                        <p>Technologies</p>
                    </div>
                </div>
            </div>
            
            <div className="right-side" style={{width:"50%"}}>
                <img src="cr.png" alt="photo" width="70%" height="90%"/>
            </div>
        </div>
    )
}

export default Hero;