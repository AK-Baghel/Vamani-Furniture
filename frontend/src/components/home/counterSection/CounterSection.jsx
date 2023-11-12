import React from 'react'
import Counter from './counter/Counter'
import "./style.css"

function counterSection() {
    return (
        <div className='counterSectionContainer'>
            <Counter value={2500} heading={"Designs"} symb={"+"} logo={1} />
            <Counter value={2} heading={"Factories"} logo={2} />
            <Counter value={150} heading={"Machines"} symb={"+"} logo={3} />
            <Counter value={1600} heading={"Workforce"} symb={"+"} logo={4} />
            <Counter value={21} heading={"Experience"} symb={"+"} logo={5} />
            <Counter value={15} heading={"Countries"} symb={"+"} logo={6} />
        </div>
    )
}

export default counterSection