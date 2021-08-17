import { Accordion, Table } from 'react-bootstrap';
import tradingHistory from "../../../assets/images/icon/tradingHistory.png";
import Profile from "../../../assets/images/profile/01.jpg"
import "../GamesDetailStyle.scss";

const TradingHistory = () =>{
    return(
        <>
            <div className="listingTable">
                <Accordion defaultActiveKey="1" className="detailAccordian" >
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <img src={tradingHistory} alt="detailBar"/>Trading History
                        </Accordion.Header>
                        <Accordion.Body>
                            <Table className="listingsTable" striped responsive hover>
                                <thead>
                                    <tr>
                                        <th>Event</th>
                                        <th>Price</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>List</td>
                                        <td>0.08</td>
                                        <td><img src={Profile} />@Pazarcikli</td>
                                        <td>Guysocke</td>
                                        <td>2 hours ago</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}

export default TradingHistory;