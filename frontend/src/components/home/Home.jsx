import React, { useState, useEffect } from 'react'

import { IoCall } from "react-icons/io5"

import CounterSections from "./counterSection/CounterSection"
import photo1 from "../../assets/photo1.jpg"
import photo2 from "../../assets/photo2.jpg"
// import video from "../../assets/For-Web1-2.mp4"

import "./style.css"
import CardItem from '../cardItem/CardItem'
import LabelCard from '../labelCard/LabelCard'

import { useNavigate } from 'react-router-dom'
import Carousel from '../carousel/Carousel'

function Home() {

    const navigate = useNavigate();
    const scrollPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const arr = [
        "Dining tables (regular and expandable)",
        "Foldable tables",
        "Beds",
        "Side tables",
        "Nested tables",
        "Night tables",
        "Bar stools and chairs",
    ]

    const picImages = ["homeBox1", "homeBox1Pic2", "homeBox1Pic3"]
    const [image, setImage] = useState("homeBox1Pic2");


    return (
        <div className="homeContainer">
            <Carousel />
            <div className={`homeBox1`}>
                <div className="homeBox1Sections">
                    <div className="homeBox1Section1">
                        Designers and exporters of the finest contemporary furniture and interior accessories
                    </div>
                    <div className="homeBox1Section2">
                        Our team understand how important is to “think like our clients” while making all the product related decisions to serve them well.
                    </div>
                    <div className="homeBox1Section3">
                        <div className="homeBox1Section3Button " onClick={() => { navigate('/about'); scrollPage(); }}>ABOUT US</div>
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
                arr={arr}
                icon={true}
                route={'products'}
            />

            <CardItem
                position={"right"}
                item1={"FIRM'S APPROACH"}
                item2={"OUR DESIGNS & QUALITY PRODUCTS WILL BUILD YOUR TRUST"}
                item3={"Our Contemporary and electic designs blend aesthetics with functional value. Our collections with their uncluttered elegant lines embrace both the mordern as well as traditional looks"}
                item6={"Get In Touch"}
                photo={photo2}
                route={'contact'}
            />

            <LabelCard />

            {/* <div className="homeVideoSection">

                <video className='homeVideo' src={video} controlsList="nodownload" controls={true} autoPlay loop muted />
            </div> */}

        </div>
    )
}

export default Home