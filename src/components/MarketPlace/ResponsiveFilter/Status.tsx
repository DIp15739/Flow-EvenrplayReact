import {Accordion,Tab, Nav} from "react-bootstrap";
import statusWhite from "../../../assets/images/marketPlace/statusWhite.png";
import "./ResponsiveFilterStyle.scss";

const Status = () =>{
    return(
        <>
            <div className="statusResponsive">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <div className="statusLabel">
                            <img src={statusWhite} className="img-fluid" alt="statusIcon" />
                            <span>Status</span>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                </Accordion.Item>
            </div>
        </>
    );
}

export default Status;