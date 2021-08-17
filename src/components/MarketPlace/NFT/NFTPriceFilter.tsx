import { useState } from "react";
import Input from "../../Common/Input/Input";
import {Row, Col} from "react-bootstrap";

const NFTPriceFilter = () =>{
    const [MinPrice, setMinPrice] = useState('');
    const [MaxPrice, setMaxPrice] = useState('');
    return(
        <>
            <Col xl={4} lg={6} md={12} >
                <div className="priceMain">
                    <Row>
                        <Col className="pr-0">
                            <div className="priceLabel">
                                <i className="fas fa-dollar-sign"></i>
                                <span>Price</span>
                            </div>
                        </Col>
                        <Col className="priceInput p-0">
                            <Input type="number" value={MinPrice} onChange={setMinPrice} placeholder="Min" />
                        </Col>
                        <Col className="priceInput pl-0">
                            <Input type="number" value={MaxPrice} onChange={setMaxPrice} placeholder="Max" />
                        </Col>
                    </Row>
                </div>
            </Col>
        </>
    );
}

export default NFTPriceFilter;