import {Tab, Nav, Col,} from "react-bootstrap";
import Status from "../../../assets/images/marketPlace/Status.png";

const NFTStatus = () =>{
    return(
        <>
            <Col xl={5} lg={6} md={12}>
                <div className="statusMain">
                    <div className="statusLabel">
                        <img src={Status} className="img-fluid" alt="statusIcon" />
                        <span>Status</span>
                    </div>
                    <div className="statusTab">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="buyNow">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="buyNow">BUY NOW</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="hasOffers">HAS OFFERS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="new">NEW</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Tab.Container>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default NFTStatus;