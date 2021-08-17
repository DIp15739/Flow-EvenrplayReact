import GameDetailDigit from "../RightSideBar/GameDetailDigit";
import GameDetailImage from "../GameDetailImage";
import GameDetailBreadcrumb from "../RightSideBar/GameDetailBreadcrumb";
import GameTitle from "../RightSideBar/GameTitle";
import ButtonFill from "../../Common/ButtonFill/ButtonFill";
import ButtonOutline from "../../Common/ButtonOutline/ButtonOutline";
import { Button } from "react-bootstrap";

const GameDetailResponsive = () =>{
    return(
        <>
            <div className="gameDetailMain gameDetailResponsive">
                <GameDetailBreadcrumb />
                <GameTitle />
                <GameDetailImage />
                <div className="detailfooter">
                    <div className="detailButton">
                        <ButtonFill text="UPVOTE" />
                    </div>
                    <div className="shareStar">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-share-alt"></i>
                    </div>
                </div>
                <GameDetailDigit />
                <ButtonOutline text="BUY THIS NFT" />
            </div>
        </>
    );
}

export default GameDetailResponsive;