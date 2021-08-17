import GameImage from "../../assets/images/nft/nft.png";
import "./GamesDetailStyle.scss";
import { Col } from "react-bootstrap";

const GameDetailImage = () =>{
    return(
        <>
            <div className="gameImage">
                <Col className="p-0">
                    <img src={GameImage} alt="gameImage"/>
                </Col >
                <Col className="p-0">
                    <div className="gameViewDate">
                        <p>Jan 26 2021</p>
                        <p><i className="fas fa-eye"></i>143,566</p>
                    </div>
                </Col>
            </div>
        </>
    );
}

export default GameDetailImage;