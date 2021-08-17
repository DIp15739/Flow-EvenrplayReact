import { useState } from "react";
import "./MarketPlaceStyle.scss";
import {Tab, Row, Nav, Col} from "react-bootstrap";
import NFTSearchMain from "./NFT/NFTSearchMain";
import NFTTabFilter from "./NFT/NFTTabFilter";
import CreatorsTable from "./Creators/CreatorsTable";

const MarketPlaceTab = () =>{
    const [key, setKey] = useState('home');
    return(
        <>
            <div className="marketPlaceTabs">
                <Tab.Container id="left-tabs-example" defaultActiveKey="nft">
                    <Row>
                        <Col sm={12}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="nft">NFT'S</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="creator">CREATORS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="nft">
                                    <NFTSearchMain />
                                    <NFTTabFilter />
                                </Tab.Pane>
                                <Tab.Pane eventKey="creator">
                                    <CreatorsTable />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    );
}

export default MarketPlaceTab;