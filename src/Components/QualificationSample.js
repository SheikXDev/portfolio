import React from "react";
import QualificationSampleStyle from "../Styling/QualificationSampleStyle.css"
import {GiGraduateCap} from "react-icons/gi";
import {IoIosCalendar} from "react-icons/io";
import {FaPercentage}   from "react-icons/fa";

 function Qualification () {
    return(
        <>
            <section className="qualification">
                <div className="qualification_main">
                    <div className="quali-main-heading">
                        <h2 className="quali-heading">Qualification</h2>
                        <h4>Education</h4> 
                    </div>
                    
                    <div className="qualification_container">
                        <ul className="first childs">
                            <li>
                                <h3 className="title">Mechanical Engineer</h3>
                                <h4>Bannari Amman Institute of Technology</h4>
                                <IoIosCalendar/><span>2018-2022</span>
                                <span className="circle"></span>
                                {/* <span className="date">Mechanical Engineer</span> */}
                                <div>
                                    <FaPercentage/>84.6
                                </div>
                                

                            </li>
                        </ul>
                        <ul className="second childs">
                            <li>
                                <h3 className="title">CLASS XII</h3>
                                <h4>P.A.C.M Higher Secondary School</h4>
                                <IoIosCalendar/><span>2017-2018</span>
                                <span className="circle"></span>
                                {/* <span className="date">Class XII</span> */}
                                    <div>
                                        76<FaPercentage size={20}/>
                                    </div>
                                
                            </li>
                        </ul>
                        <ul className="third childs">
                            <li>
                                <h3 className="title">CLASS X</h3>
                                <h4>P.A.C.M Higher Secondary School</h4>
                                <IoIosCalendar/><span>2015-2016</span>
                                <span className="circle"></span>
                                {/* <span className="date">Class X</span> */}
                                
                                <div>
                                    96<FaPercentage size={18}/>
                                </div>

                            </li>
                        </ul>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Qualification;