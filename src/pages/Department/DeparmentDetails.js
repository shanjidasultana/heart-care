import React from 'react';
import { Col } from 'react-bootstrap';
import './Department.css'

const DeparmentDetails = ({item}) => {
    const {image, des,name}=item;
   
    return (
      <Col xs={12} md={3} >
        <div >
           <img src={image} className="dep-img"  alt="" />
           {/* <div className="hh">
               nn'''''
           </div> */}
          <div className="dep-content">
            <h2>{name}</h2>
            <p>{des}</p>
          </div>
          
          
        </div>
      </Col>
    );
};

export default DeparmentDetails;