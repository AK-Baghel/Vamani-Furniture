import React, { useState } from 'react'
import "./style.css"
function Grievance() {

    const [card, setCard] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [check, setCheck] = useState(false);

    const submit = () => {
        if (!card || !aadhar || !phone || !message) {
            setCheck(true)
            return false;
        }
        console.log(card, aadhar, phone, message);
    }

    return (
        <div className="productsContainer grievanceContainer">
            <div className="productsText grievanceText">VAMANI OVERSEAS PVT LTD</div>
            <div className="productsHeading">Grievance Redressal</div>
            <div className="grievanceForm">
                <div className="grievanceFormSection1">
                    {/* <label className='grievanceFormLabel' htmlFor="cardNo">
                        Card Number:
                    </label> */}
                    <input type="number" id="cardNo" className="grievanceFormInput" value={card} placeholder='Enter Your Card Number.' onChange={(e) => { setCard(e.target.value) }} />
                </div>
                {check && !card && <p className='validation'>It's mandatory to fill Card Number</p>}

                <div className="grievanceFormSection1">
                    {/* <label className='grievanceFormLabel' htmlFor="aadharNo">
                        Aadhar Number:
                    </label> */}
                    <input type="number" id="aadharNo" className="grievanceFormInput" value={aadhar} placeholder='Enter Your Aadhar Number.' onChange={(e) => { setAadhar(e.target.value) }} />
                </div>
                {check && !aadhar && <p className='validation'>It's mandatory to fill Aadhar Number</p>}

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
                    <div className="cardItemSection6 grievanceButton" onClick={submit}>Submit</div>
                </div>


            </div>
        </div>
    )
}

export default Grievance