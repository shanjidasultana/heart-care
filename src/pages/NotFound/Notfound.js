import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../images/404.gif';
const Notfound = () => {
    return (
        <Row>
            <Col xs={12} md={6}>
                <img src={error} width="500" alt="" />
            </Col>
            <Col xs={12} md={4}>
            <h1 style={{margin:"20px auto",fontSize:"150px",color:"brown"}}>404</h1>
            <h4 style={{color:"goldenrod",fontSize:"50px"}}>Page not Found</h4>
            <Link to="/home">
                <button className="btn">Go Back</button>
            </Link>
            </Col>
        </Row>
    );
};

export default Notfound;