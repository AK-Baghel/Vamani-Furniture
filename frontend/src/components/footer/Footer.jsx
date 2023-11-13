import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate();
    const scrollPage = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <footer className="footerContainer">
            <div className="footerBox1">
                <div className="footerBox1Section">
                    <div className="footerBox1SectionHeading">Head Office</div>
                    <div className="footerBox1SectionText">5-L/156, NIT Faridabad, Haryana – 121001</div>
                </div>
                <div className="footerBox1Section">
                    <div className="footerBox1SectionHeading">Links</div>
                    <div className="footerBox1SectionItems">
                        <div className="footerBox1SectionItem" onClick={() => { navigate("/") }} >Home</div>
                        <div className="footerBox1SectionItem" onClick={() => { navigate("/about"); scrollPage(); }} >About Us</div>
                        <div className="footerBox1SectionItem" onClick={() => { navigate("/products"); scrollPage(); }} >Products</div>
                        {/* <div className="footerBox1SectionItem" onClick={() => { navigate("/about") }} >Sustainability</div> */}
                        <div className="footerBox1SectionItem" onClick={() => { navigate("/grievance"); scrollPage(); }} >Grievance Redressal</div>
                        <div className="footerBox1SectionItem" onClick={() => { navigate("/contact"); scrollPage(); }} >Contact Us</div>
                    </div>
                </div>
                <div className="footerBox1Section">
                    <div className="footerBox1SectionHeading">FACTORY ADDRESS</div>
                    <div className="footerBox1SectionText">49th Mile Stone, Delhi – Mathura Highway, Village : Prithla, Tehsil & Dist : Palwal 121 102, Haryana [INDIA]</div>
                </div>
                <div className="footerBox1Section">
                    <div className="footerBox1SectionHeading">CONTACT US</div>
                    <div className="footerBox1SectionItems">
                        <div className="footerBox1SectionItem">+919761932233</div>
                        <div className="footerBox1SectionItem">pkapil@vamanioverseas.com</div>
                    </div>
                </div>
            </div>
            <div className="footerBox2"></div>
            <div className="footerBox3">
                <div className="footerBox3Text">
                    Copyright © Vamani Overseas. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer