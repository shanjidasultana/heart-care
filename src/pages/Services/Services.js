import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Service from './Service';

const Services = () => {
    const doctors=useData();
    return (
        <div>
            <h1 className="mt-5">Our Doctor's Team</h1>
            <div className="underline "></div>
            <Row className="g-4 my-5">
                {
                    doctors?.map(doctor =><Service
                        key={doctor.id}
                        doctor={doctor}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;