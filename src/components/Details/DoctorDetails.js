import React  from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import {FaAngleDoubleRight} from 'react-icons/fa';
import image from '../../images/detail1-removebg-preview.png';
const DoctorDetails = () => {
  const {serviceId}=useParams();
  const products=useData();
  console.log(products);
  const doctorDetail=products.find(doctor=>{
    return doctor.id===serviceId;
  })
    return (
        <Row className="mt-5">
          <Col xs={12} md={6}>
            <img src={image} alt=""  width="500"/>
          </Col>
          <Col xs={12} md={6} className="my-4">
            <h1>{doctorDetail?.name}</h1>
            <div className="underline "></div>
            <h2 className="text-danger"> {doctorDetail?.category}</h2>
            <p> {doctorDetail?.details}</p>
            
              <ul className="doc-container">
                <li><FaAngleDoubleRight className="text-primary fw-bold"/> Vivamus ut lorem et lectus elementum condimentum.</li>
                <li><FaAngleDoubleRight className="text-primary fw-bold"/> Aliquam pretium nibh a mi hendrerit, in ullamcorper felis lobortis.</li>
                <li><FaAngleDoubleRight className="text-primary fw-bold"/> Duis eu dolor id ante pellentesque volutpat quis et enim.</li>
                <li><FaAngleDoubleRight className="text-primary fw-bold"/> Ut efficitur elit blandit magna elementum, at cursus odio tempor.</li>
                <li><FaAngleDoubleRight className="text-primary fw-bold"/> Etiam ac enim eu nibh suscipit tristique nec non lectus.</li>
              
              </ul>
            <Link to="/contact">
            <button className="btn"> Book An Appointment</button>
            </Link>
          </Col>
        </Row>
         
        
    );
};

export default DoctorDetails;