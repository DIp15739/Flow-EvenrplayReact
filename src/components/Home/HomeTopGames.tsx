import React from "react";
import Title from "../Common/Title/Title";
import {Col, Row} from 'react-bootstrap';
import GameList from "../Common/GamesList/GamesList";
import callOfDuty from "../../assets/images/home/callOfDuty.jpg";
import fifa from "../../assets/images/home/fifa.jpg";
import fallOut from "../../assets/images/home/fallOut.jpg";

const HomeTopGames = () => {

    const data = [
        {
            id:1,
            head:'TOP GAMES',
            all: 'SEE ALL',
            title: <i className="fas fa-chevron-right"></i>,
        },
    ]

    const data1 = [
        {
            id: 1,
            gameImage: callOfDuty,
            gameTitle: "Call Of Duty Black Ops 4",
            gameViewers: "73,032 viewers"
        },
        {
            id: 2,
            gameImage: fifa,
            gameTitle: "Fifa 19",
            gameViewers: "54,032 viewers"
        },
        {
            id: 3,
            gameImage: fallOut,
            gameTitle: "Fallout 76",
            gameViewers: "24,002 viewers"
        },
        {
            id: 4,
            gameImage: fifa,
            gameTitle: "Fifa 19",
            gameViewers: "54,032 viewers"
        },
        {
            id: 5,
            gameImage: fallOut,
            gameTitle: "Fallout 76",
            gameViewers: "24,002 viewers"
        },
        {
            id: 6,
            gameImage: callOfDuty,
            gameTitle: "Call Of Duty Black Ops 4",
            gameViewers: "73,032 viewers"
        },
    ]

    return(
        <>
            {data.map((d:any,i:any) => (
                <Title data={d} key={i} />
            ))}
            <div className="HomeTopGame">
                <Row>
                    {data1.map((d:any,i:any) => (
                        <Col xxl={3} xl={4} lg={6} md={6} sm={12} xs={12} key={i}>
                            <GameList data={d} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default HomeTopGames;