import {useState} from "react";
import  "./FooterStyle.scss";
import {Col, Row} from 'react-bootstrap';
import companyLogo from "../../../assets/images/header/everplayLogo.png";
import tikTok from "../../../assets/images/footer/tikTok.png";
import twitch from "../../../assets/images/footer/twitch.png";
import twitter from "../../../assets/images/footer/twitter.png";
import instagram from "../../../assets/images/footer/instagram.png";
import Input from "../../Common/Input/Input";

export interface Props{
    active: any;
}

const FooterSocial = ()=> {
    const [search, setSearch] = useState('');
    const data = [
        {
            id: 1,
            social: tikTok,
        },
        {
            id: 1,
            social: twitch,
        },
        {
            id: 1,
            social: twitter,
        },
        {
            id: 1,
            social: instagram,
        },
    ]

    return(
        <>
            <div className="socialSearch">
                <h5>SOCIAL</h5>
                <ul>
                    <Row>
                        {data.map((d:any,i:any)=>(
                            <Col lg={2} md={2} sm={2} xs={6} key={i}>
                                <li key={i}><img src={d.social} /></li>
                            </Col>
                        ))}
                    </Row>
                </ul>
                <Col lg="10" className="p-0">
                    <Input type="search" value={search} onChange={setSearch} placeholder="Type Something" />
                </Col>
            </div>
        </>
    );
}

export default FooterSocial;