import { useState } from "react";
import {Row, Col, Button} from "react-bootstrap";
import NFTSearchGame from "./NFTSearchGame";
import NFTStatus from "./NFTStatus";
import NFTPriceFilter from "./NFTPriceFilter";
import NFTSortBy from "./NFTSortBy";
import "../ResponsiveFilter/ResponsiveFilterStyle.scss";
import FilterModal from "../ResponsiveFilter/FilterModal";

const NFTSearchMain = () =>{
    const [fullscreen, setFullscreen] = useState(false);
    return(
        <>
            <div className="NftSearchMain NftSearchMainResponsive">
                <Row>
                    <Col xl={10} lg={12} md={12}>
                        <Row>
                            <NFTSearchGame />
                            <NFTStatus />
                            <NFTPriceFilter />
                        </Row>
                    </Col>
                    <Col xl={2} lg={2} md={6}>
                        <NFTSortBy />
                    </Col>
                </Row>
            </div>
            <div className="NftSearchResponsive">
                <Button className="connectWallet" onClick={() => setFullscreen(true)} >FILTERS </Button>
            </div>
            <FilterModal show={fullscreen} onHide={() => setFullscreen(false)} />
        </>
    );
}

export default NFTSearchMain;