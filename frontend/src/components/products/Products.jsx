import React from 'react'
import photo7 from "../../assets/photo7.jpg"
import photo8 from "../../assets/photo8.jpg"
import photo9 from "../../assets/photo9.jpg"
import photo10 from "../../assets/photo10.jpg"
import photo11 from "../../assets/photo11.jpg"
import photo12 from "../../assets/photo12.jpg"
import photo13 from "../../assets/photo13.jpg"
import photo14 from "../../assets/photo14.jpg"
import photo15 from "../../assets/photo15.jpg"
import photo16 from "../../assets/photo16.jpg"

import "./style.css"

function Products() {
    return (
        <div className="productsContainer">
            <div className="productsText">Our Products</div>
            <div className="productsHeading">Showcasing the exquisite craftsmanship of firm</div>
            <img className='productsImg' src={photo7} alt="" />
            <img className='productsImg' src={photo8} alt="" />
            <img className='productsImg' src={photo9} alt="" />
            <img className='productsImg' src={photo10} alt="" />
            <img className='productsImg' src={photo11} alt="" />
            <img className='productsImg' src={photo12} alt="" />
            <img className='productsImg' src={photo13} alt="" />
            <img className='productsImg' src={photo14} alt="" />
            <img className='productsImg' src={photo15} alt="" />
            <img className='productsImg' src={photo16} alt="" />
        </div>
    )
}

export default Products