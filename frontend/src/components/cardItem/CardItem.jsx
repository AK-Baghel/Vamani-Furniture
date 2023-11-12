import React from 'react'
import "./style.css"
import Photo from "../../assets/photo1.jpg"
import { AiFillCheckCircle } from "react-icons/ai"

function CardItem() {
    return (
        <div className="cardItemContainer">
            <div className="cardItemBox1">
                <img className="cardItemImg" src={Photo} alt="" />
            </div>
            <div className="cardItemBox2">
                <div className="cardItemSection1">OUR PRODUCTS</div>
                <div className="cardItemSection2">Elevate your space with our modern design</div>
                <div className="cardItemSection3">We at Vamani are catering our customers with all modern design furniture product for living, dining and bedroom furniture.</div>
                <div className="cardItemSection4">Majorly we have categorized our collection as:</div>
                <ul className="cardItemSection5">
                    <li className="cardItemSection5List">
                        <AiFillCheckCircle className='cardItemSection5ListIcon' />
                        <div className="cardItemSection5ListText">Dining tables (regular and expandable)</div>
                    </li>
                    <li className="cardItemSection5List">
                        <AiFillCheckCircle className='cardItemSection5ListIcon' />
                        <div className="cardItemSection5ListText">Foldable tables</div>
                    </li>
                    <li className="cardItemSection5List">
                        <AiFillCheckCircle className='cardItemSection5ListIcon' />
                        <div className="cardItemSection5ListText">Beds</div>
                    </li>
                    <li className="cardItemSection5List">
                        <AiFillCheckCircle className='cardItemSection5ListIcon' />
                        <div className="cardItemSection5ListText">Side tables</div>
                    </li>
                    <li className="cardItemSection5List">
                        <AiFillCheckCircle className='cardItemSection5ListIcon' />
                        <div className="cardItemSection5ListText">Nested tables</div>
                    </li>
                    <li className="cardItemSection5List">
                        <AiFillCheckCircle className='cardItemSection5ListIcon' />
                        <div className="cardItemSection5ListText">Night tables</div>
                    </li>
                    <li className="cardItemSection5List">
                        <AiFillCheckCircle className='cardItemSection5ListIcon' />
                        <div className="cardItemSection5ListText">Bar stools and chairs</div>
                    </li>
                </ul>

                <div className="cardItemSection6">Learn More</div>
            </div>
        </div>
    )
}

export default CardItem