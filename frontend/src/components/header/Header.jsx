import React, { useState } from "react"
import "./style.css"
import { FaBars } from "react-icons/fa6"
// import { RiArrowDropDownLine } from "react-icons/ri"
import vamani from "../../assets/vamani.jpg"

import { IoClose } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation();
    const [show, setShow] = useState(true);
    const [popUp, setPopUp] = useState(false);


    const toggleBar = () => {
        setShow(!show);
    }
    const navigate = useNavigate();

    const routing = (para) => {
        navigate(para);
        setShow(true)
        setPopUp(false)
    }

    return (
        <div className="headerContainer">
            <div className="headerItems" >

                <div className="headerLogo">
                    <img className="headerLogoImg" src={vamani} alt="" />
                </div>

                <div className={`headerAllItem ${show ? "headerMobile " : ""}`}>

                    {/* <div className="headerLeft">
                        <div className="headerLogoImgBox">
                            <img className="headerLogoImg" src={vamani} alt="" />
                        </div>


                    </div> */}

                    <div className="headerRight">

                        <div className={`headerItem hoverUnderline ${location.pathname === "/furniture" ? "active" : ""}`} onClick={() => { routing("/furniture") }}>Home</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/furniture/about" ? "active" : ""}`} onClick={() => { routing("/furniture/about") }} >About Us</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/furniture/products" ? "active" : ""}`} onClick={() => { routing("/furniture/products") }} >Products</div>
                        <div className={`headerItem hoverUnderline`}> <a className="headerItemLink " href="https://www.canva.com/design/DAFtqRS5M8I/smvGAoc__C5U1OTP02o8RQ/view" target="_blank">Sustainability</a></div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/dashboard" ? "active" : ""}`} onClick={() => { routing("/dashboard") }} >Grievance Redressal</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/dashboard" ? "active" : ""}`} onClick={() => { routing("/dashboard") }} >Contact Us</div>


                    </div>
                </div>



            </div>
            {
                show ? <FaBars className="headerBar" onClick={toggleBar} /> : <IoClose className=" headerBar headerCross" onClick={toggleBar} />
            }

        </div>
    )
}
export default Header;