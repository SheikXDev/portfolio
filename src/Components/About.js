import React from "react";
import { CgProfile } from "react-icons/cg"
import {BsPhone} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
import sheik from "../Images/sheik.png"
import AboutStyle from "../Styling/ABoutStyle.css"
import Resume from "../Images/Sheik_Mohammed_kothari_Resume_.pdf"




function About() {
    return(
        <>
        <section className="about" >

                    <div className="heading-a" id="about">
                        <h2 className="head-a">About me</h2>
                        <h4>Introduction</h4>
                    </div>
                    
            <div className="container grid-2">

                    
                    

                    <div className="about-container">
                        <div data-aos="fade-up" data-aos-duration="1250" data-aos-easing="ease-in-sine" className="about-img">
                            <img src={sheik} alt="Loading..."></img>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1250" className="about-text">
                            <div>
                            <p>Hello,I'm Sheik Mohammed Kothari.A meticulous and organized individual with the skill set of HTML, CSS, Javascript, React JS. Strong ability to handle complex projects with immense creativity. Being Tech - savvy and quick learner have the ability to adapt in a professional environment. Good tech skills, communication and problem solving competencies to promote the growth of the Organisation.</p>
                            </div>
                    
                            <div className="information">
                                <div className="info-box">
                                    <CgProfile size={28}/>
                                    <span>Sheik Mohammed Kothari S</span>
                                </div>
                                <div className="info-box">
                                    <BsPhone size={28}/>
                                    <span>9159672600</span>
                                </div>
                                <div className="info-box">
                                    <SiGmail size={28}/>
                                    <span>smsheikmohammed@gmail.com</span>
                                </div>

                                <a href={Resume} className="btn" download>Download CV</a>

                            </div>
                    </div>
                    
                    
                    
                    </div>

                   
            </div>
        </section>
        </>
    )
}

export default About