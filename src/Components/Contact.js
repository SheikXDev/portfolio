import React,{useState} from "react";
import { useRef } from "react";
import "../Styling/ContactStyle.css"
import {ImLocation2} from "react-icons/im";
import {HiMail} from "react-icons/hi";
import {BsPhone, BsTextarea,BsInstagram} from "react-icons/bs";
import { text } from "@fortawesome/fontawesome-svg-core";
import emailjs from '@emailjs/browser';
import {AiFillGithub,AiOutlineLinkedin,AiOutlineCloseCircle} from "react-icons/ai";




function Contact() {

        const[modal,setModal] = useState(false);

        const toggleModal = () => {
            setModal(!modal);
            console.log("success");
        };
        console.log(modal);

/*--------------- Not Scrollable  ------------------------------------*/

        if(modal) {
            document.body.classList.add('active-modal')
          } else {
            document.body.classList.remove('active-modal')
          }
        



        const form = useRef();

        

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_uul4h89', 'template_vzgpeki', form.current, 'GpPw5RFOmqG-BixBG')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
              toggleModal();
          };

    return(
        <>
        
            {modal && <div className="overlay-c">
                <div className="modal-msg">
                <h3 className="pop-head">
                    Thanks for Contacting me.
                </h3>
                <button className="close-btn" onClick={()=> toggleModal()}>
                    <AiOutlineCloseCircle size={20}/>
                </button>
            </div>
        </div>}


        <section className="contact" id="contact">
            <div className="contact-container-m">
                <div className="contact-pop">
                    <div className="title-head">
                        <h4 className="title-c">Contact</h4>
                        
                    </div>

                    <div  className="pop-cntd">
                        <div data-aos="fade-down"  data-aos-duration="1200" className="contact-info">
                            <h3 data-aos="fade-down" data-aos-duration="1400">Connect With Me</h3>
                            
                            <div data-aos="fade-up"  data-aos-duration="1400" className="info-cntd">
                                <ImLocation2 size={30}/><span className="info-c"> Sivakamipuram Street, Rajapalayam, Virudhunagar District, Tamil Nadu</span>
                            </div>
                            <div data-aos="fade-up"  data-aos-duration="1400" className="info-cntd">
                                <HiMail size={30} type={"mail"}/><span className="info-c">smsheikmohammed@gmail.com</span>
                            </div>
                            <div data-aos="fade-up"  data-aos-duration="1400" className="info-cntd">
                                <BsPhone size={30}/><span className="info-c">9159672600</span>
                            </div>
                            <div data-aos="fade-up"  data-aos-duration="1400" className="social-media">
                                <a  href="https://github.com/SheikXDev" target="_blank" ><AiFillGithub size={40} /></a>
                                <a  href="https://www.instagram.com/sheik_s86/?next=%2F" target={"_blank"} ><BsInstagram size={40} /></a>
                                <a  href="https://www.linkedin.com/in/sheik-mohammed-kothari-a4346b190/" target={"_blank"} ><AiOutlineLinkedin size={40} /></a>
                            </div>
                        </div>
                        <div data-aos="fade-down"  data-aos-duration="1200" className="contact-form">
                            
                            <form className="form-c" ref={form} onSubmit={sendEmail}>
                                <input data-aos="fade-up"  data-aos-duration="1000" type={text} className="input-c" placeholder="Full Name" name="user_name" required></input> 
                                <input data-aos="fade-up"  data-aos-duration="1300" type={"email"} className="input-c" placeholder="Email" name="user_email" required></input> 
                                <input data-aos="fade-up"  data-aos-duration="1400" type={text} className="input-c" placeholder="Subject" name="user_subject" required></input> 
                                <textarea data-aos="fade-up"  data-aos-duration="1500" className="input-d" placeholder="Message" name="user_message" required></textarea>
                                <button data-aos="fade-up"  data-aos-duration="1600" type={"submit"} className="btn" >Send </button>
                            </form>
                        </div>                    
                    </div>
                    
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact