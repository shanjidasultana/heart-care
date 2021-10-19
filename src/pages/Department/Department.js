import { Container, Row } from 'react-bootstrap';
import departmentData  from '../../components/Departmentdata';
import DeparmentDetails from './DeparmentDetails';
import './Department.css';
const Department = () => {
    return (
    <Container>
        <h1 className="mt-5">Our Department</h1>
        <div className="underline"></div>
        <Row className="g-4">

           {
               departmentData.map(item=><DeparmentDetails item={item} key={item.id}></DeparmentDetails>)
           }
        </Row>
    </Container>
    );
};

export default Department;