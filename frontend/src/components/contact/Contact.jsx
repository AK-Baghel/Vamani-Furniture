import React from 'react'
import "./style.css"
import ContactForm from './contactForm/ContactForm'

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
                            <div className="footerBox1SectionItem">+919761932233</div>
                            <div className="footerBox1SectionItem">pkapil@vamanioverseas.com</div>
                        </div>
                    </div>
                </div>

            </div>

            <ContactForm />

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.3630556508933!2d77.30029387463293!3d28.226658202397694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd0db6d8837a1%3A0x7fa35db16ff8959b!2sVamani%20Overseas%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1699894485562!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

        </div>
    )
}

export default Contact