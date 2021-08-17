import { Accordion } from 'react-bootstrap';
import priceHistory from "../../../assets/images/icon/priceHistory.png";
import "../GamesDetailStyle.scss";

const PriceHistory = () =>{
    return(
        <>
            <div className="detailAccordianMain">
                <Accordion defaultActiveKey="1" className="detailAccordian" >
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><img src={priceHistory} alt="detailBar"/>PriceHisotry</Accordion.Header>
                        <Accordion.Body>
                            
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}

export default PriceHistory;