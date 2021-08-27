import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import GameDetailDigit from "./GameDetailDigit";
import GameDetailImage from "../GameDetailImage";
import GameDetailBreadcrumb from "./GameDetailBreadcrumb";
import GameTitle from "./GameTitle";
import ButtonFill from "../../Common/ButtonFill/ButtonFill";
import ButtonOutline from "../../Common/ButtonOutline/ButtonOutline";
import { Button } from "react-bootstrap";

const GameDetailResponsive = () => {
  const [nftInfo, setNftInfo] = useState(null);
  const fetchTokenData = async () => {
    const encoded = await fcl.send([
      fcl.script`
          import PinataPartyContract from 0xf8d6e0586b0a20c7
          pub fun main() : {String : String} {
            let nftOwner = getAccount(0xf8d6e0586b0a20c7)  
            let capability = nftOwner.getCapability<&{PinataPartyContract.NFTReceiver}>(/public/NFTReceiver)
        
            let receiverRef = capability.borrow()
                ?? panic("Could not borrow the receiver reference")
        
            return receiverRef.getMetadata(id: 1)
          }
        `,
    ]);

    const decoded = await fcl.decode(encoded);
    setNftInfo(decoded);
  };

  useEffect(() => {
    fetchTokenData();
  }, []);

  return (
    <>
      <div className="gameDetailMain gameDetailResponsive">
        <GameDetailBreadcrumb />
        <GameTitle data={nftInfo} />
        <GameDetailImage data={nftInfo} />
        <div className="detailfooter">
          <div className="detailButton">
            <ButtonFill text="UPVOTE" />
          </div>
          <div className="shareStar">
            <i className="fas fa-star"></i>
            <i className="fas fa-share-alt"></i>
          </div>
        </div>
        <GameDetailDigit data={nftInfo} />
        <ButtonOutline text="BUY THIS NFT" />
      </div>
    </>
  );
};

export default GameDetailResponsive;
