import { Button } from "react-bootstrap";
import GameDetailDigit from "./GameDetailDigit";
import GameDetailBreadcrumb from "./GameDetailBreadcrumb";
import GameTitle from "./GameTitle";
import ButtonOutline from "../../Common/ButtonOutline/ButtonOutline";
import ButtonFill from "../../Common/ButtonFill/ButtonFill";

const GameDetail = () =>{

    return(
        <>
            <div className="gameDetailMain gameDetailWithout">
                <GameDetailBreadcrumb />
                <GameTitle />
                <GameDetailDigit />
                <div className="detailfooter">
                    <div className="detailButton">
                        <ButtonOutline text="BUY THIS NFT" />
                        <ButtonFill text="UPVOTE" />
                    </div>
                    <div className="shareStar">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-share-alt"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameDetail;