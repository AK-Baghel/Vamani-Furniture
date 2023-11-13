import React from 'react'

import { IoCall } from "react-icons/io5"

import CounterSections from "./counterSection/CounterSection"
import photo1 from "../../assets/photo1.jpg"
import photo2 from "../../assets/photo2.jpg"

import "./style.css"
import CardItem from '../cardItem/CardItem'
import LabelCard from '../labelCard/LabelCard'

function Home() {
    return (
        <div className="homeContainer">
            <div className="homeBox1">
                <div className="homeBox1Sections">
                    <div className="homeBox1Section1">
                        Designers and exporters of the finest contemporary furniture and interior accessories
                    </div>
                    <div className="homeBox1Section2">
                        Our team understand how important is to “think like our clients” while making all the product related decisions to serve them well.
                    </div>
                    <div className="homeBox1Section3">
                        <div className="homeBox1Section3Button ">ABOUT US</div>
                        <div className="homeBox1Section3Contact">
                            <div className="homeBox1Section3ContactLeft">
                                <IoCall />
                            </div>
                            <div className="homeBox1Section3ContactRight">
                                <div className="homeBox1Section3ContactRightText">Call us today</div>
                                <div className="homeBox1Section3ContactRightCall">+91 9761932233</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CounterSections />

            <CardItem
                position={"left"}
                item1={"OUR PRODUCTS"}
                item2={"Elevate your space with our modern design"}
                item3={"We at Vamani are catering our customers with all modern design furniture product for living, dining and bedroom furniture."}
                item4={"Majorly we have categorized our collection as:"}
                item6={"Learn More"}
                photo={photo1}
            />

            <CardItem
                position={"right"}
                item1={"FIRM'S APPROACH"}
                item2={"OUR DESIGNS & QUALITY PRODUCTS WILL BUILD YOUR TRUST"}
                item3={"Our Contemporary and electic designs blend aesthetics with functional value. Our collections with their uncluttered elegant lines embrace both the mordern as well as traditional looks"}
                item6={"Get In Touch"}
                photo={photo2}
            />

            <LabelCard />

        </div>
    )
}

export default Home