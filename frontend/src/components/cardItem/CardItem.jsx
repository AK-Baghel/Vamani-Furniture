import React from 'react'
import "./style.css"
// import Photo from "../../assets/photo1.jpg"
import { AiFillCheckCircle } from "react-icons/ai"

function CardItem({ position, item1, item2, item3, item4, item6, photo }) {
    return (
        <div className={`cardItemContainer ${position === 'right' ? "cardItemContainerOther" : ""}`}>

            <div className="cardItemBox1">
                <img className="cardItemImg" src={photo} alt="" />
            </div>

            <div className={`cardItemBox2 ${position === 'right' ? "cardItemBox2Other" : ""}`}>

                <div className="cardItemSection1">{item1}</div>
                <div className="cardItemSection2">{item2}</div>
                <div className="cardItemSection3">{item3}</div>

                {
                    item4 ?
                        <div className="cardItemSection4">{item4}</div>
                        : ""
                }


                {
                    position === 'left' ?
                        <>
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
                        </>
                        : ""
                }

                <div className="cardItemSection6">{item6}</div>
            </div>
        </div>
    )
}

export default CardItem