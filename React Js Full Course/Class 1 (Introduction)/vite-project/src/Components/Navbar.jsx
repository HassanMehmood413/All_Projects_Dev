import React from 'react'
import hassan from '../images/hassan.png'
export default function Navbar(props) {
    return (
        <>
            <div className="navbar">
                <div className="img">
                    <img src= {hassan} alt="" />
                    <span>Hassan Mehmood</span>
                </div>

                <div className="options">
                    <ul>
                        <li>{props.Homes}</li>
                        <li>Content</li>
                        <li>Services</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
