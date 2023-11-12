import React, { useState, useEffect } from 'react'

import { MdDesignServices } from "react-icons/md"
import { BiSolidFactory } from "react-icons/bi"
import { BiSolidUser } from "react-icons/bi"
import { BiWorld } from "react-icons/bi"
import { BsBuildingFillGear } from "react-icons/bs"
import { MdCloudDone } from "react-icons/md"

import "./style.css"

function Counter({ value, heading, symb, logo }) {

    const [scrollValue, setScrollValue] = useState(0);
    const [hasScrolledPastThreshold, setHasScrolledPastThreshold] = useState(false);

    const handleScroll = () => {
        const currentScrollValue = window.scrollY;
        setScrollValue(currentScrollValue);

        if (currentScrollValue > 300 && !hasScrolledPastThreshold) {
            setHasScrolledPastThreshold(true);
            counter();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolledPastThreshold]);


    const [count, setCount] = useState(0)

    const counter = () => {
        const intervalId = setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= (value - 1)) {
                    clearInterval(intervalId);
                }
                return prevCount + 1;
            });
        }, 1);
    };


    return (
        <div className="counterContainer">
            {
                logo === 1 ? <MdDesignServices className='counterLogo' /> :
                    logo === 2 ? <BiSolidFactory className='counterLogo' /> :
                        logo === 3 ? <BsBuildingFillGear className='counterLogo' /> :
                            logo === 4 ? <BiSolidUser className='counterLogo' /> :
                                logo === 5 ? <MdCloudDone className='counterLogo' /> :
                                    logo === 6 ? <BiWorld className='counterLogo' /> : ""

            }

            <div className="counterText">{count}{symb}</div>
            <div className="counterHeading">{heading}</div>
        </div>
    )
}

export default Counter