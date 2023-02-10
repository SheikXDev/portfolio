import React from "react";
import "../Styling/SkillsStyle.css";
import Simage from "../Images/skillImage.jpg"
import {SiHtml5,SiCss3,SiJava,SiReact} from "react-icons/si"
import {TbBrandJavascript} from "react-icons/tb"
function Skills() {
    return (
        <>
            <section className="skills" id="skills">
                <div className="skills-container">
                    <div className="skill-head">
                        <h2 className="head-s">Skills</h2>
                    </div>
                    <div className="main-s">
                    <div data-aos="fade-up" data-aos-duration="1200" className="skill-photo">
                        <img src={Simage} alt="Loading..."></img>
                    </div>
                    <div className="skill-subcontainer">
                        <div data-aos="fade-up" data-aos-duration="1200" className="skill-box">
                            <SiHtml5 size={35}/>
                            <span className="title-s">HTML</span>
                            <div className="skill-bar">
                                <div className="skill-per html">
                                    <span className="tooltip"></span>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1200" className="skill-box">
                            <SiCss3 size={35}/>
                            <span className="title-s">CSS</span>
                            <div className="skill-bar">
                                <div className="skill-per css">
                                    <span className="tooltip"></span>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1200" className="skill-box">
                            <TbBrandJavascript className="icon-s" size={35}/> 
                            <span className="title-s">Java Script</span>
                            <div className="skill-bar">
                                <div className="skill-per js">
                                    <span className="tooltip"></span>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1200" className="skill-box">
                            <SiReact size={35}/>
                            <span className="title-s">React js</span>
                            <div className="skill-bar">
                                <div className="skill-per react">
                                    <span className="tooltip"></span>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1200" className="skill-box">
                            <SiJava size={35}/>
                            <span className="title-s">Java</span>
                            <div className="skill-bar">
                                <div className="skill-per java">
                                    <span className="tooltip"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;