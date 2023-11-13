import React from 'react'
import Marquee from "react-fast-marquee";
import marqueeImg from "../../assets/marquee.jpg"
import "./style.css"


function MarqueeComp() {
    return (
        <div className="marqueeContainer">
            <div className='marqueeHeading'>Certifications</div>
            <Marquee pauseOnHover={true} speed={100} autoFill={true} className="marquee" gradient={true} gradientWidth={40}>
                <img className="marqueeImg" src={marqueeImg} alt='' />
                <img className="marqueeImg" src={marqueeImg} alt='' />
            </Marquee>
        </div>
    )
}

export default MarqueeComp