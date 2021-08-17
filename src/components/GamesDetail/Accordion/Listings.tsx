import { Accordion, Table } from 'react-bootstrap';
import listings from "../../../assets/images/icon/listings.png";
import {Link} from "react-router-dom";
import "../GamesDetailStyle.scss";

const Listings = () =>{
    return(
        <>
            <div className="listingTable">
                <Accordion defaultActiveKey="1" className="detailAccordian" >
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <img src={listings} alt="detailBar"/>Listings
                        </Accordion.Header>
                        <Accordion.Body>
                            <Table className="listingsTable" striped responsive hover>
                                <thead>
                                    <tr>
                                        <th>Moment</th>
                                        <th>Price</th>
                                        <th>Buyer</th>
                                        <th>Sellers</th>
                                        <th>Date/Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Need for Speed Heat: Keys to the Map</td>
                                        <td>$5.00</td>
                                        <td>@Pazarcikli</td>
                                        <td>Guysocke</td>
                                        <td>Jul, 21 12:38 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Need for Speed Heat: Keys to the Map</td>
                                        <td>$5.00</td>
                                        <td>@Pazarcikli</td>
                                        <td>Guysocke</td>
                                        <td>Jul, 21 12:38 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Need for Speed Heat: Keys to the Map</td>
                                        <td>$5.00</td>
                                        <td>@Pazarcikli</td>
                                        <td>Guysocke</td>
                                        <td>Jul, 21 12:38 PM</td>
                                    </tr>
                                </tbody>
                                <div className="CreatotsMarketPlace">
                                    <Link to="">LOAD MORE</Link>
                                </div>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}

export default Listings;