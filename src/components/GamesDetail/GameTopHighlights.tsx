import Title from "../Common/Title/Title";
import CreatorsList from "../Common/CreatorsList/CreatorsList";
import {Col, Row} from 'react-bootstrap';
import seaodThieves from "../../assets/images/common/seaodThieves.jpg";
import battleField from "../../assets/images/common/battleField.jpg";
import callOfDutyColdWar from "../../assets/images/common/callOfDutyColdWar.jpg";
import counterStrike from "../../assets/images/common/counterStrike.jpg";
import {Link} from "react-router-dom";

const GameTopHighlights = () =>{

    const data = [
        {
            id:1,
            head: 'MORE TOP HIGHLIGHTS FROM @USERNAME',
        },
    ]

    const data1 = [
        {
            id: 1,
            creatorsImage: seaodThieves,
            creatorsTitle: "@USERNAME",
            creatorsUsername: "Name of clip",
            creatorsPriceTitle: "PRICE",
            creatorsPrice: "0.50 ETH",
        },
        {
            id: 2,
            creatorsImage: battleField,
            creatorsTitle: "@USERNAME",
            creatorsUsername: "Name of clip",
            creatorsPriceTitle: "PRICE",
            creatorsPrice: "0.50 ETH",
        },
        {
            id: 3,
            creatorsImage: callOfDutyColdWar,
            creatorsTitle: "@USERNAME",
            creatorsUsername: "Name of clip",
            creatorsPriceTitle: "PRICE",
            creatorsPrice: "0.50 ETH",
        },
        {
            id: 4,
            creatorsImage: counterStrike,
            creatorsTitle: "@USERNAME",
            creatorsUsername: "Name of clip",
            creatorsPriceTitle: "PRICE",
            creatorsPrice: "0.50 ETH",
        },
    ]

    return(
        <>
            {data.map((d:any,i:any) => (
                <Title data={d} key={i} />
            ))}
            <Row>
                {data1.map((d:any,i:any) => (
                    <Col xxl={3} xl={4} lg={6} md={6} sm={12} xs={12} key={i}>
                        <CreatorsList data={d} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default GameTopHighlights;