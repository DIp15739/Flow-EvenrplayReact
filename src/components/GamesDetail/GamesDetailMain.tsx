import "./GamesDetailStyle.scss";
import GameDetailImage from "./GameDetailImage";
import GameDetail from "./RightSideBar/GameDetail";
import Details from "./Accordion/Details";
import PriceHistory from "./Accordion/PriceHistory";
import Listings from "./Accordion/Listings";
import TradingHistory from "./Accordion/TradingHistory";
// import GameDetailResponsive from "./RightSideBar/GameDetailResponsive";
import GameDetailResponsive from "./GameDetailResponsive/GameDetailResponsive";
import GameTopHighlights from "./GameTopHighlights";
import { Col, Row } from "react-bootstrap";

const GamesDetailMain = () =>{
    return(
        <>
            <Row>
                <Col xl={6} className="gameDetailWithoutImage" ><GameDetailImage /></Col>
                <Col xl={6}><GameDetail /></Col>
                <Col xl={6}><GameDetailResponsive /></Col>
            </Row>
            <Row>
                <Col xl={6}><Details /></Col>
                <Col xl={6}><PriceHistory /></Col>
                <Col xl={12}><Listings /></Col>
                <Col xl={12}><TradingHistory /></Col>
                <Col xl={12}><GameTopHighlights /></Col>
            </Row>
        </>
    );
}

export default GamesDetailMain;