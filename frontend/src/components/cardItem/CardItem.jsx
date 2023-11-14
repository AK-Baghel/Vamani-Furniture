import React from 'react'
import "./style.css"

import { AiFillCheckCircle } from "react-icons/ai"
import { FaDotCircle } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'


function CardItem({ position, item1, item2, item3, item4, item6, photo, arr, icon, itemArr, route }) {



    const navigate = useNavigate();
    const scrollPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className={`cardItemContainer ${position === 'right' ? "cardItemContainerOther" : ""}`}>

            <div className="cardItemBox1">
                <img className="cardItemImg" src={photo} alt="" />
            </div>

            <div className={`cardItemBox2 ${position === 'right' ? "cardItemBox2Other" : ""}`}>

                {
                    itemArr ?
                        itemArr.map((item) => {

                            return (
                                <>
                                    <div className="cardItemSection1">{item.item1}</div>
                                    <div className="cardItemSection3">{item.item2}</div>
                                    <div className="cardItemSection3">{item.item3}</div>
                                </>
                            )

                        }) : ""

                }


                {
                    item1 ?
                        <div className="cardItemSection1">{item1}</div>
                        : ""
                }

                {
                    item2 ?
                        <div className="cardItemSection2">{item2}</div>
                        : ""
                }

                {
                    item3 ?
                        <div className="cardItemSection3">{item3}</div>
                        : ""
                }

                {
                    item4 ?
                        <div className="cardItemSection4">{item4}</div>
                        : ""
                }


                {
                    arr ?
                        <>
                            <ul className="cardItemSection5">

                                {
                                    arr.map((item, index) => {
                                        return (
                                            <li className="cardItemSection5List" key={index}>
                                                {
                                                    icon === true ?
                                                        <AiFillCheckCircle className='cardItemSection5ListIcon' /> :
                                                        <FaDotCircle className='cardItemSection5ListIcon' />
                                                }
                                                <div className="cardItemSection5ListText">{item}</div>
                                            </li>
                                        )
                                    })
                                }




                            </ul>
                        </>
                        : ""
                }

                {
                    item6 ?
                        <div className="cardItemSection6" onClick={() => { navigate(`/${route}`); scrollPage(); }}>{item6}</div>
                        : ""
                }
            </div>
        </div>
    )
}

export default CardItem