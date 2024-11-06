import React, { useEffect, useRef } from 'react'
import menus from '../images/menus.jpg'
import Lottie from 'lottie-react';
import animationData from '../images/zero.json'

export default function menu() {
    const lottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.focus(); // Automatically focuses the element
        }
    }, []);
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/JS_Chapterwise_Notes.pdf'; // Path to your CV file in the public folder
        link.download = 'My_CV.pdf'; // The name of the file that will be downloaded
        link.click();
    };

    return (
        <div>
            <div className="backgroundimage">
                <div className="image">
                    <img src={menus} alt="" />
                    <div className="menuwrite">
                        <h1 className="myname">Hey, I'm Hassan Mehmood</h1>
                    </div>
                    <div className="menutext">
                        <p>
                            A Result-Oriented Web Developer building and managing Websites and
                            Web Applications that leads to the success of the overall product
                        </p>
                    </div>
                    <div onClick={handleDownload} className="menuButton">
                        <button>Download CV</button>
                    </div>
                    <div className='lottie'>

                        <Lottie
                            animationData={animationData}
                            loop={true}
                            style={{ width: 40, height: 50 }}
                            tabIndex="0"
                            ref={lottieRef} // Reference to the Lottie element
                        />
                    </div>
                </div>

                <div className="alllinks">

                </div>
            </div>
        </div>
    )
}
