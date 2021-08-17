import {Tab, Row, Nav, Col} from "react-bootstrap";
import seaodThieves from "../../../assets/images/common/seaodThieves.jpg";
import battleField from "../../../assets/images/common/battleField.jpg";
import callOfDutyColdWar from "../../../assets/images/common/callOfDutyColdWar.jpg";
import counterStrike from "../../../assets/images/common/counterStrike.jpg";
import CreatorsList from "./../../Common/CreatorsList/CreatorsList";
import "../MarketPlaceStyle.scss";

const NFTTabFilter = () =>{
    const data1 = [
        {
            id: 1,
            creatorsImage: seaodThieves,
            creatorsTitle: "@USERNAME",
            creatorsUsername: "Name of clip",
            creatorsPriceTitle: "PRICE",
            creatorsPrice: "0.50 ETH",
        },
    ]
    const data2 = [
        {
            id: 1,
            creatorsImage: battleField,
            creatorsTitle: "@USERNAME",
            creatorsUsername: "Name of clip",
            creatorsPriceTitle: "PRICE",
            creatorsPrice: "0.50 ETH",
        },
    ]
    const data3 = [
        {
            id: 1,
            creatorsImage: callOfDutyColdWar,
            creatorsTitle: "@USERNAME",
            creatorsUsername: "Name of clip",
            creatorsPriceTitle: "PRICE",
            creatorsPrice: "0.50 ETH",
        },
    ]
    const data4 = [
        {
            id: 1,
            creatorsImage: counterStrike,
            creatorsTitle: "@USERNAME",
            creatorsUsername: "Name of clip",
            creatorsPriceTitle: "PRICE",
            creatorsPrice: "0.50 ETH",
        },
    ]
    return(
        <>
            <div className="NFTFilterMain">
                <Tab.Container id="left-tabs-example" defaultActiveKey="adventure">
                    <Row>
                        <Col sm={12}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item><Nav.Link eventKey="adventure">Adventure</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="action">Action</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="indie">Indie</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="simulator">Simulator</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="stretegy">Strategy</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="sport">Sport</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="shooter">Shooter</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="fighting">Fighting</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="racing">Racing</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="rpg">RPG</Nav.Link></Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="adventure">
                                    <Row>
                                        {data1.map((d:any,i:any) => (
                                            <Col xxl={3} xl={4} lg={6} md={6} sm={12} xs={12} key={i}>
                                                <CreatorsList data={d} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="action">
                                    <Row>
                                        {data2.map((d:any,i:any) => (
                                            <Col xxl={3} xl={4} lg={6} md={6} sm={12} xs={12} key={i}>
                                                <CreatorsList data={d} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="indie">
                                    <Row>
                                        {data3.map((d:any,i:any) => (
                                            <Col xxl={3} xl={4} lg={6} md={6} sm={12} xs={12} key={i}>
                                                <CreatorsList data={d} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="simulator">
                                    <Row>
                                        {data4.map((d:any,i:any) => (
                                            <Col xxl={3} xl={4} lg={6} md={6} sm={12} xs={12} key={i}>
                                                <CreatorsList data={d} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    );
}

export default NFTTabFilter;