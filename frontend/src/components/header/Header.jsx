import React, { useState, useEffect } from "react"
import "./style.css"
import { FaBars } from "react-icons/fa6"
import vamani from "../../assets/vamani.jpg"

import { IoClose } from "react-icons/io5"
import { MdGTranslate } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Header = () => {


    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'en',
                autoDisplay: false,
            },
            'google_translate_element'
        );
    };

    useEffect(() => {
        // Check if the script has already been added
        if (!document.getElementById('google-translate-script')) {
            const addScript = document.createElement('script');
            addScript.id = 'google-translate-script';
            addScript.src =
                '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            addScript.async = true;

            addScript.onload = () => {
                // Once the script is loaded, initialize the translation
                window.googleTranslateElementInit = googleTranslateElementInit;
                googleTranslateElementInit();
            };

            document.body.appendChild(addScript);
            return () => {
                document.body.removeChild(addScript);
                delete window.googleTranslateElementInit;
            };
        } else {
            // If the script is already added, just initialize the translation
            googleTranslateElementInit();
        }
    },);


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
                                translateShow && <div id="google_translate_element" className="translate" />
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