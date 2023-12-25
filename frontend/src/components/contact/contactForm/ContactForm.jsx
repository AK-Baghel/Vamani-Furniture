import React, { useState } from 'react'

function ContactForm() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [check, setCheck] = useState(false);

    const send = () => {
        if (!name || !email || !phone || !message) {
            setCheck(true)
            return false;
        }
        console.log(name, email, phone, message);
    }


    return (
        <div className="productsContainer">
            {/* <div className="productsText grievanceText">Contact Form</div> */}
            <div className="productsHeading">Contact Form</div>
            <div className="grievanceForm">
                <div className="grievanceFormSection1">
                    {/* <label className='grievanceFormLabel' htmlFor="name">
                        Name:
                    </label> */}
                    <input type="text" id="name" className="grievanceFormInput" value={name} placeholder='Enter Your Name.' onChange={(e) => { setName(e.target.value) }} />
                </div>
                {check && !name && <p className='validation'>It's mandatory to fill Name</p>}

                <div className="grievanceFormSection1">
                    {/* <label className='grievanceFormLabel' htmlFor="email">
                        Email Address:
                    </label> */}
                    <input type="text" id="email" className="grievanceFormInput" value={email} placeholder='Enter Your Email Address.' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                {check && !email && <p className='validation'>It's mandatory to fill Aadhar Number</p>}

                <div className="grievanceFormSection1">
                    {/* <label className='grievanceFormLabel' htmlFor="phoneNo">
                        Phone Number:
                    </label> */}
                    <input type="number" id="phoneNo" className="grievanceFormInput" value={phone} placeholder='Enter Your Phone Number.' onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                {check && !phone && <p className='validation'>It's mandatory to fill Phone Number</p>}

                <div className="grievanceFormSection1 ">
                    {/* <label className='grievanceFormLabel' htmlFor="message">
                        Message:
                    </label> */}
                    <textarea id="message" className="grievanceFormInput textArea" value={message} placeholder='Enter Your Message.' onChange={(e) => { setMessage(e.target.value) }} />
                </div>
                {check && !message && <p className='validation'>It's mandatory to fill Message</p>}

                <div className="grievanceFormSection1Right">
                    <div className="cardItemSection6 " onClick={send}>Send Message</div>
                </div>


            </div>
        </div>
    )
}

export default ContactForm