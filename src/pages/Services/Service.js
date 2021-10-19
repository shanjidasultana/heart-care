import React from 'react';
import { Col } from 'react-bootstrap';
import {FaInstagram,FaTwitter,FaFacebookF} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Service = ({doctor}) => {
    const {id,name,category,picture} = doctor;
    return (
            <Col xs={12} md={3} >
                <div >
                <img src={picture} className="dep-img"  alt="" />
               
                <div className="dep-content">
                    <h2>{name}</h2>
                    <p>{category}</p>

                    <span >
                        <FaFacebookF style={{color:"blue" ,marginRight:"5px"}}/>  
                        <FaInstagram  style={{color:"goldenrod" ,marginRight:"5px"}}/>  
                        <FaTwitter style={{color:"lightblue" ,marginRight:"5px"}}/>  
                    </span>
                
                </div>               
                <Link to ={`/service/${id}`}>
                    <button className="btn">See More</button>

                </Link>
                 </div>
            </Col>
    );
};

export default Service;