import React from 'react'

import { IoCall } from "react-icons/io5"

import CounterSections from "./counterSection/CounterSection"

import "./style.css"

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
                        <div className="homeBox1Section3Button">ABOUT US</div>
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
        </div>
    )
}

export default Home