import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
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

const GamesDetailMain = () => {
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
      <Row>
        <Col xl={6} className="gameDetailWithoutImage">
          <GameDetailImage data={nftInfo} />
        </Col>
        <Col xl={6}>
          <GameDetail data={nftInfo} />
        </Col>
        <Col xl={6}>
          <GameDetailResponsive />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <Details />
        </Col>
        <Col xl={6}>
          <PriceHistory />
        </Col>
        <Col xl={12}>
          <Listings />
        </Col>
        <Col xl={12}>
          <TradingHistory />
        </Col>
        <Col xl={12}>
          <GameTopHighlights />
        </Col>
      </Row>
    </>
  );
};

export default GamesDetailMain;
