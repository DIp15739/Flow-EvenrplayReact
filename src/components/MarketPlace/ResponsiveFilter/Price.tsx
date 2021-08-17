import {useState} from "react";
import {Accordion, Row, Col, Button} from "react-bootstrap";
import Input from "../../Common/Input/Input";
import dollarWhite from "../../../assets/images/marketPlace/dollarWhite.png";
import ButtonOutline from "../../Common/ButtonOutline/ButtonOutline";

const Price = () =>{
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    return(
        <>
            <div className="responsivePrice">
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <div className="statusLabel">
                            <img src={dollarWhite} className="img-fluid" alt="statusIcon" />
                            <span>Price</span>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col xs={6}>
                                <Input type="number" value={min} onChange={setMin} placeholder="Min" />
                            </Col>
                            <Col xs={6}>
                                <Input type="number" value={max} onChange={setMax} placeholder="Max" />
                            </Col>
                            <Col xs={12} className="mt-4">
                                <ButtonOutline text="APPLY" />
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </div>
        </>
    );
}

export default Price;