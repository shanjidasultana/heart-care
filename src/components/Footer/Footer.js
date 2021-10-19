import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../images/logo1-removebg-preview (1).png';
import {RiStethoscopeFill ,RiHeartPulseFill  } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {FiMapPin} from 'react-icons/fi';
import {FaInstagram,FaTwitter,FaFacebookF} from 'react-icons/fa';
import {BiEnvelope} from 'react-icons/bi';
import {FcCallback,FcAlarmClock,FcGoogle,FcStart} from 'react-icons/fc';
import './Footer.css';
const Footer = () => { 
    return (
        <div  className="bg-dark npm  text-white mt-5 p-4">
             <Row >
                <Col xs={12} md={3}>
                <div>
                    <div className="d-flex">
                        <img src={logo} alt="" height="80px" />
                        <div>
                        <h2>Heart<span className="text-danger ">Care</span> </h2>
                        <p className="text-warning"><small>we care about your heart</small></p>
                        </div>
                    </div>
                    <p>The Heart Care Heart Hospital have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit. Distinctio vitae maiores enim ea atque? Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos paccusamus.</p>
                    <button className="btn ">Read More</button>
                </div>
                </Col>
                <Col xs={12} md={3}>
                <h4>Our Services</h4>
                <div className="dep-container">
                    <ul>
                        {/* <li><AiOutlineArrowRight/> ?Alisplastz</li> */}
                        <Link to="/department"><li><RiHeartPulseFill className="dep-icon"/>Angioplasty</li></Link>
                        <Link to="/department"><li><RiHeartPulseFill className="dep-icon"/>ECG </li></Link>
                        <Link to="/department"><li><RiHeartPulseFill className="dep-icon"/>Echocardiogram </li></Link>
                        <Link to="/department"><li><RiHeartPulseFill className="dep-icon"/> Stress ECG</li></Link>
                        <Link to="/department"><li><RiHeartPulseFill className="dep-icon"/> Angiography</li></Link>
                        <Link to="/department"><li><RiHeartPulseFill className="dep-icon"/>24 Hr Holter </li></Link>
                        <Link to="/department"><li><RiHeartPulseFill className="dep-icon"/> Pacemaker Check </li></Link>
                        <Link to="/department"><li><RiHeartPulseFill className="dep-icon"/> Cardiac Surgery </li></Link>
                    </ul>
                </div>
                </Col>
                <Col xs={12} md={3}>
                <div className="doc-container">
                    <h4>Expert Doctors</h4>
                    <ul >
                        <Link  to="/doctor"><li ><RiStethoscopeFill className=" doc-icon me-3" />Dr. Adamaris</li></Link>
                        <Link to="/doctor"><li><RiStethoscopeFill className=" doc-icon me-3" />Dr. Jam Doe </li></Link>
                        <Link to="/doctor"><li><RiStethoscopeFill className=" doc-icon me-3" />Dr. Stewart </li></Link>
                        <Link to="/doctor"><li><RiStethoscopeFill className=" doc-icon me-3" />Dr. Archibald</li></Link>
                        <Link to="/doctor"><li><RiStethoscopeFill className=" doc-icon me-3" />Dr. Chalmers</li></Link>
                        <Link to="/doctor"><li><RiStethoscopeFill className=" doc-icon me-3" />Dr. Algernon</li></Link>
                        <Link to="/doctor"><li><RiStethoscopeFill className=" doc-icon me-3" />Dr. Benson Loius</li></Link>
                        <Link to="/doctor"><li><RiStethoscopeFill className=" doc-icon me-3" />Dr.  Johnson Lee </li></Link> 
                    </ul>
                </div>
                </Col>
                <Col xs={12} md={3}>
                <div className="contact-container">
                    <h4>Contact us</h4>
                    <ul>
                        <div className="d-flex ">
                            <FiMapPin style={{ fontSize:"24px" ,marginRight:"8px",color:"red"}}/>
                        <li>
                            <h5 className="text-gray">Main Branch</h5>
                            <p>HeartCare Building, BD</p>
                        </li>
                        </div>
                        <div className="d-flex ">
                            <FcCallback style={{ fontSize:"24px" ,marginRight:"8px"}}/>
                        <li>
                            <h5 className="text-gray">Call us Anytime at:</h5>
                            <p>+110986453</p>
                        </li>
                        </div>
                        <div className="d-flex ">
                            <BiEnvelope style={{ fontSize:"24px" ,marginRight:"8px",color:"lightblue"}}/>
                        <li>
                            <h5 className="text-gray">For Inquiry</h5>
                            <p>info@heartCare.com</p>
                        </li>
                        </div>
                        <div className="d-flex">
                            <FcAlarmClock style={{ fontSize:"24px" ,marginRight:"8px"}}/>
                        <li>
                            <h5 className="text-gray">Our Timings</h5>
                            <p>Mon-Sat : 9.00 am-7.00 pm</p>
                        </li>
                        </div>
                    </ul>
                </div>
                </Col>
                <div >
                    <div className="mx-auto w-50 d-flex">
                        <FaTwitter style={{width:"40px",height:"40px"}}/>
                        <FcGoogle style={{width:"40px",height:"40px"}}/>
                        <FaInstagram style={{width:"40px",height:"40px"}}/>
                        <FcStart style={{width:"40px",height:"40px"}}/>
                        <FaFacebookF style={{width:"40px",height:"40px"}}/>
                            <br />
                            <br />
                        <p className="text-muted">HeartCare &copy; 2021,All Rights Reserved..</p>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default Footer;