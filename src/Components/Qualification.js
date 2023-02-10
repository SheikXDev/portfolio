import React from "react";
import "../Styling/QualificationStyle.css";
import {GiGraduateCap} from "react-icons/gi";
import {IoIosCalendar} from "react-icons/io";
import {CiPercent}   from "react-icons/ci";

function Qualification () {
    return (
        <> 
            <section className="qualification-q" id="qualification">
                    <div className="sample-main">
                        <div className="sample-heading">
                            <h3 className="head-q">Qualification</h3>
                            <h4>Education</h4>
                        </div>
                    </div>
                    <div className="timeline-s">
                        <div className="container-s sleft">
                            <div data-aos="fade-up" data-aos-duration="1200"  data-aos-easing="ease-in-out" className="content-s">
                                <h3 className="title-q">BE-Mechanical Engineering</h3>
                                <h4>Bannari Amman Institute of Technology</h4>
                                <div>
                                    <IoIosCalendar size={20}/><span>2018 - 2022</span>
                                </div>
                                
                                <div>
                                    <CiPercent size={20}/>84.6
                                </div>
                            </div>

                        </div>
                        <div className="container-s sright">
                            <div data-aos="fade-up" data-aos-duration="1200" className="content-s">
                                <h3 className="title-q">HSC</h3>
                                <h4>P.A.C.M Higher Secondary School</h4>
                                <div>
                                    <IoIosCalendar size={23}/><span>2017 - 2018</span>
                                </div>

                                <div>
                                    <CiPercent size={20}/>76
                                </div>
                            </div>

                        </div>
                        <div   className="container-s sleft">
                            <div data-aos="fade-up" data-aos-duration="1200" className="content-s">
                                        <h3 className="title-q">SSLC</h3>
                                        <h4>P.A.C.M Higher Secondary School</h4>
                                            <div>
                                                <IoIosCalendar size={20}/><span>2015 - 2016</span>
                                            </div>
                                            <div>
                                                <CiPercent size={20}/>96
                                            </div>
                            </div>

                        </div>
                    </div>
            </section>
        </>
    )
}

export default Qualification;