import React from 'react'
import "./style.css"
import ContactForm from './contactForm/ContactForm'
import GoogleMap from './googleMap/GoogleMap'

function Contact() {
    return (
        <div className="contactContainer">
            <div className="contactContainerSection1 ">
                <div className="footerBox1 contactBox1">
                    <div className="footerBox1Section">
                        <div className="footerBox1SectionHeading contactHeading">Factory Address</div>
                        <div className="footerBox1SectionText">VAMANI OVERSEAS PVT. LTD.
                            49th Mile Stone, Delhi – Mathura Highway,
                            Village : Prithla, Tehsil & Dist : Palwal 121 102,
                            Haryana [INDIA]</div>
                    </div>

                    <div className="footerBox1Section">
                        <div className="footerBox1SectionHeading contactHeading">Head Office</div>
                        <div className="footerBox1SectionText">5-L/156, NIT Faridabad,
                            Haryana – 121001</div>
                    </div>

                    <div className="footerBox1Section">
                        <div className="footerBox1SectionHeading contactHeading">Showroom Address</div>
                        <div className="footerBox1SectionText">India Exposition Mart Limited
                            C11/39, Second floor,
                            Knowledge Park-II,
                            Dist- Gautam Budh Nagar,
                            Greater Noida, UP – 201306</div>
                    </div>
                    <div className="footerBox1Section">
                        <div className="footerBox1SectionHeading contactHeading">CONTACT US</div>
                        <div className="footerBox1SectionItems">
                            <div className="footerBox1SectionItem contactHover">+919761932233</div>
                            <div className="footerBox1SectionItem contactHover">pkapil@vamanioverseas.com</div>
                        </div>
                    </div>
                </div>

            </div>

            <ContactForm />

            <GoogleMap />
        </div>
    )
}

export default Contact