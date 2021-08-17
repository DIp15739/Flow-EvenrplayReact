import FooterSocial from "./FooterSocial";
import FooterLogo from "./FooterLogo";
import {Col, Row} from 'react-bootstrap';
import "./FooterStyle.scss";
import FooterLinks from "./FooterLinks";
import FooterLegalPage from "./FooterLegalPage";
import FooterCopyRight from "./FooterCopyRight";

const FooterMain = () =>{
    return(
        <>
            <div className="footer">
                <Row className="justify-content-center">
                    <Col lg={9}>
                        <FooterLogo />
                        <Row className="justify-content-md-center">
                            <Col xxl={4} xl={4} lg={{ span:4, order: '1' }} sm={{ span:6, order: 'last' }} xs={{ span:6, order: 'last' }} md={4} >
                                <FooterSocial />
                            </Col>
                            <Col xxl={4} xl={4} lg={{ span:4, order: '2' }} sm={{ span:12, order: 'first' }} xs={{ span:12, order: 'first' }} md={4} >
                                <FooterLinks />
                            </Col>
                            <Col xxl={4} xl={2} lg={{ span:2, order: '3' }} md={4} sm={6} xs={6}>
                                <FooterLegalPage />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <FooterCopyRight />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default FooterMain;