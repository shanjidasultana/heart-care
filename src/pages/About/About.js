import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../images/about1.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            
            <h1 className="text-danger mt-5">About us</h1>
                <div className="underline"></div>
            <Container>
            <Row>
                <Col sm={6}>
                    <h3>Welcome to our
                    <br />
                     Heart care </h3>
                     <p>The Heart Care Heart Hospital have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit. Distinctio vitae maiores enim ea atque? Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.</p>
                     <p>Sapiente accusamuss repudiandae architecto corporis aspernatur. Eligendi, accusamus quas mollitia. Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.</p>
                    <h2><cite>adam Johns</cite></h2>
                    <h5>MS HEART CARE HOSPITAL</h5>
                </Col>
                <Col sm={6}>
                    <img src={about} width="400" height="400" alt="" />
                </Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default About;