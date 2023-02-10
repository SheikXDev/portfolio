import React from 'react';
import logo from "../Images/Logo.svg"
import "../Styling/NavBarStyle.css"
import photo from "../Images/photo-1.png"
import overlay from "../Images/overlay-text.png"
import Resume from "../Images/Sheik_Mohammed_kothari_Resume_.pdf"

function NavBar() {

    /*------------- Active Tab Indicator ------------------*/
        
    return(
        <>
        <div className="header">
            <div className='overlay overlay-lg'>
                <img src={overlay} className="letters" alt='Loading...'></img>
            </div>


            <nav>
                <div className="container">
                    <div className="logo">
                         <img src={logo} alt="Loading..."></img>
                    </div>

                    <div className="links" id='links'>
                        <ul>
                            <li>
                                <a  href="#">Home</a>
                            </li>
                            <li>
                                <a  href="#about">About</a>
                            </li>
                            <li>
                                <a href="#qualification">Qualification</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            {/* <li>
                                <a href="#">Contact</a>
                            </li> */}
                            <li>
                                <a href="#contact" className="active">HIRE ME!</a>
                            </li>

                        </ul>
                </div>
                   
                </div>
                
            </nav>
        
            <div className="header-content">
                <div className="container grid-2">
                
                    <div className="column-1">
                        <h3 data-aos="fade-up"  data-aos-duration="1000" className='hd text'>Hello, I'm </h3>
                        <h1 data-aos="fade-up"  data-aos-duration="1400"className='header-title'>Sheik Mohammed Kothari</h1>
                        <h4 data-aos="fade-up"  data-aos-duration="1600"className='hd2 text'><span>A</span> Creative Designer <span>From Rajapalayam</span></h4>
                        <p data-aos="fade-up"  data-aos-duration="1800"className='descriptive-text'> A highly motivated person looking for a first-time position within
                                            a yeta environment. Throughout my education, I have
                                            demonstrated high levels of motivation, work ethic and
                                            teamwork to achieve my predicted grades.</p>
                        <a data-aos="fade-up"  data-aos-duration="2000"href={Resume} className='btn' download>Download CV</a>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="1200"  className="column-2 image">
                         <div className='img-contd'>
                            <img src={photo} alt="Loading..."></img>
                         </div>

                    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default NavBar;