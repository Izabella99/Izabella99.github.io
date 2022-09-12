import React from 'react';
import SidebarMenu from '../SidebarMenu';
import Customers from './Customers'
import "../../assets/Home.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    render() {
        return(
            <Row  className="customers-page">
                <Col md={1} lg={1}>
                   <SidebarMenu/>
                </Col>
                <Col className="customers" md={8} lg={8}>
                    <Customers/>
                </Col>
                
            </Row>
        )
    }
}

export default Home;