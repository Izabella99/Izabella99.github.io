import React from 'react';
import SidebarMenu from './SidebarMenu';
import BannerImage from './BannerImage';
import "../assets/Home.css";
import Cards from "./Cards/Cards";
import MyCalendar from "./MyCalendar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Home extends React.Component {
    render() {
        return(
            <Row  className="dashboard">
                <Col md={1} lg={1}>
                   <SidebarMenu/>
                </Col>
                <Col className="dashboard-middle" md={8} lg={8}>
                    <BannerImage/>
                    <Cards/>
                </Col>
                <Col className="dashboard-right" md={3} lg={3}>
                    <MyCalendar/>
                </Col>
            </Row>
        )
    }
}

export default Home;