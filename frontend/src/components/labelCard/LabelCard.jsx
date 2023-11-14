import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'

function LabelCard() {


    const navigate = useNavigate();
    const scrollPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className="labelCardContainer">
            <div className="cardItemSection1 labelCard1">EXPERIENCE THE ESSENCE</div>
            <div className="cardItemSection2 labelCard2">A captivating video tour of our stunning work</div>

            <div className="cardItemSection3 labelCard3">We take a timeless approach to our projects, incorporating elements and materials that will remain beautiful and relevant for years to come.</div>
            <div className="cardItemSection6 labelCard4" onClick={() => { navigate('/products'); scrollPage(); }}>Learn More</div>
        </div>
    )
}

export default LabelCard