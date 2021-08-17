import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const FooterLegalPage = () =>{
    return(
        <>
            <Row className="justify-content-center">
                <Col lg={12}>
                    <h5 className="linkHead">LEGAL PAGES</h5>
                </Col>
                <Col lg={12}>
                    <div className="marketPlace">
                        <Link className="extarnalLink" to="">Privacy Policy</Link>
                        <Link className="extarnalLink" to="">Terms of Use</Link>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default FooterLegalPage;