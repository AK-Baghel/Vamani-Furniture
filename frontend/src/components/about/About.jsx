import React from 'react'
import CardItem from '../cardItem/CardItem'
import photo3 from "../../assets/photo3.jpg"
import photo4 from "../../assets/photo4.jpg"
import photo5 from "../../assets/photo5.jpg"
import photo6 from "../../assets/photo6.jpg"
import "./style.css"
import Marquee from '../marquee/MarqueeComp'

function About() {

    const arr = [
        "Design Based Supplier",
        "Quick Response Deliveries",
        "Capacity",
        "Reliability",
        "Compliance",
        "Diverse Product Range"
    ]

    const arr1 = [
        "Commitment: We deliver what we commit",
        "Reputation: We safeguard Trust in all Relationships",
        "Growth Orientation: We have courage to set ambitious goals & achieve them",
        "Continuous Improvement: We continuously improve ourselves professionally & personally",
        "Responsibility: We take ownership of our actions & results",
        "Collaboration: We recognize & value differences in people with aim for creating synergy",
    ]
    return (
        <div className="aboutContainer">

            <div className="aboutSections">
                <div className="aboutSection">
                    <div className="aboutSection1">Our Firm</div>
                    <div className="aboutSection2">Discover the vision and expertise behind our firm</div>
                </div>
            </div>

            <CardItem
                position={"right"}
                item1={"WE ARE VAMANI FURNITURE"}
                item2={"An Ultimate Manufacturer of solid Timber & Metal Furniture"}
                item3={"VAMANI OVERSEAS is a well established and renowned name in the Home Decor arena. Our Team of professional managing strength lies in our state of the art manufacturing facility encompassing curing, treatment and mechanised wood working machinery. We stock and showcases an exquisite range of wooden, wrought iron furniture and antique reproductions."}
                photo={photo3}
            />

            <CardItem
                position={"left"}
                item1={"VAMANI OVERSEAS"}
                item2={"Who We are"}
                photo={photo4}
                arr={arr}
                icon={false}
            />

            <CardItem
                position={"right"}
                itemArr={
                    [{
                        item1: "Vision",
                        item3: "To be Globally recognized export company that put quality, service & value as priority to satisfy the needs of our customers, employees & stakeholders."
                    },
                    {
                        item1: "Mission",
                        item2: `To offer products with superior quality & value- To create peaceful & enjoyable work environment for our employees- To contribute in the growth of society along with company’s business​.`,
                        item3: `We pride ourselves on honesty & respect. It makes us customer centric, innovative & passionate. It empowers & support our resources. Apart from being collaborative, we value ethics and integrity which makes us globally responsible.`
                    }
                    ]
                }
                photo={photo5}
            />

            <CardItem
                position={"left"}
                item1={"Core value:"}
                item3={"We pride ourselves on honesty & respect. It makes us customer centric, innovative & passionate. It empowers & support our resources. Apart from being collaborative, we value ethics and integrity which makes us globally responsible."}
                photo={photo6}
                arr={arr1}
                icon={false}
            />

            <Marquee />

        </div>
    )
}

export default About