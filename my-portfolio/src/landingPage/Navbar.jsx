import React from 'react'
import '../styles/navbar.css'
function Navbar() {
    return (
        <div className='navbar' style={{ height:"150px"}}>
            

                <a href="#">About Me</a>
                <a href="#">Projects</a>
                <a href="#">Services</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
        </div>
    )
}
export default Navbar;
