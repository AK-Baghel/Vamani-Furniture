import React, { useState, useEffect } from "react"
import "./style.css"
import { FaBars } from "react-icons/fa6"
import vamani from "../../assets/vamani.jpg"

import { IoClose } from "react-icons/io5"
import { MdGTranslate } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Translate from "../translate/Translate"

const Header = () => {

    const location = useLocation();
    const [show, setShow] = useState(true);
    const [popUp, setPopUp] = useState(false);
    const [translateShow, setTranslateShow] = useState(false)


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

                <div className="headerLogo" onClick={() => { routing("/") }}>
                    <img className="headerLogoImg" src={vamani} alt="" />
                </div>

                <div className={`headerAllItem ${show ? "headerMobile " : ""}`}>

                    {/* <div className="headerLeft">
                        <div className="headerLogoImgBox">
                            <img className="headerLogoImg" src={vamani} alt="" />
                        </div>


                    </div> */}

                    <div className="headerRight">

                        <div className={`headerItem hoverUnderline ${location.pathname === "/" ? "active" : ""}`} onClick={() => { routing("/") }}>Home</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/about" ? "active" : ""}`} onClick={() => { routing("/about") }} >About Us</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/products" ? "active" : ""}`} onClick={() => { routing("/products") }} >Products</div>
                        <div className={`headerItem hoverUnderline`}> <a className="headerItemLink " href="https://www.canva.com/design/DAFtqRS5M8I/smvGAoc__C5U1OTP02o8RQ/view" target="_blank">Sustainability</a></div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/grievance" ? "active" : ""}`} onClick={() => { routing("/grievance") }} >Grievance Redressal</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/contact" ? "active" : ""}`} onClick={() => { routing("/contact") }} >Contact Us</div>
                        <div className="translateBox headerItem " >
                            <MdGTranslate className={`translateIcon`} onClick={() => { setTranslateShow(!translateShow); }} />
                            {
                                translateShow && <Translate />
                            }
                        </div>


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