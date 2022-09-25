import React from 'react';
import SidebarMenu from '../SidebarMenu';
import Customers from './Customers'
import "../../assets/Home.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    render() {
        return(
            <Row  className="customers-page" style={{marginRight:0}}>
                <Col md={1} lg={1}>
                   <SidebarMenu/>
                </Col>
                <Col className="customers" md={11} lg={11}>
                    <Customers/>
                </Col>
                
            </Row>
        )
    }
}

export default Home;