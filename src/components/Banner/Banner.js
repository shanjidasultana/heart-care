import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg"
import banner3 from "../../images/banner3.jpg"
import banner4 from "../../images/banner4.jpg"
import './Banner.css';
const Banner = () => {
    return (
        <Carousel className="w-100">
            
            <Carousel.Item>
                <img 
                fluid
                className="carousel-img"
                src={banner1}     alt="First slide"
                />
                <Carousel.Caption className="caption">
                <p>INSPIRING BETTER HEALTH</p>
                <h1>Treat Your </h1>
                <br />
                <h1>Heart Right</h1>
                <p>Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities via covalent scenarios.</p>
                <button className="btn">Discover More</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                Fluid
                className="carousel-img"
                src={banner2}     alt="First slide"
                />
                <Carousel.Caption className="caption" >
                <p>INSPIRING BETTER HEALTH</p>
                <h1>Healthy Heart</h1>
                <br />
                <h1>healthy life</h1>
                <p>Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities via covalent scenarios.</p>
                <button className="btn">Discover More</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                Fluid
                className="carousel-img"
                src={banner3}
                alt="Second slide"
                />

                <Carousel.Caption className="caption">
                <p>GROWING TO MEET YOUR NEEDS</p>
                <h1>A healthy outside starts <br/> from the inside.</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                <button className="btn">Discover More</button>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img"
                src={banner4}  
                  alt="Third slide"
                />

                <Carousel.Caption className="caption">
                <p>GROWING TO MEET YOUR NEEDS</p>
                <h1>Health is like money we <br/> never have a true idea of its value</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                <button className="btn">Discover More</button>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;