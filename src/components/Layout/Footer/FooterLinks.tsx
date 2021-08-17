import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const FooterLinks = () =>{
    return(
        <>
            <div className="footerLink">
                <Row className="justify-content-center">
                    <Col lg={12} md={12}>
                        <h5 className="linkHead">Links</h5>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} >
                        <div className="marketPlace">
                            <Link className="extarnalLink" to="">Marketplace</Link>
                            <Link className="internalLink" to="">All NFT's</Link>
                            <Link className="internalLink" to="">Top Games</Link>
                            <Link className="internalLink" to="">Top Clips</Link>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} >
                        <Link className="extarnalLink" to="">Home</Link>
                        <Link className="extarnalLink" to="">Rankings</Link>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default FooterLinks; 