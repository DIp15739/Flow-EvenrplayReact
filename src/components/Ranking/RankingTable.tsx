import {Table} from "react-bootstrap";
import bitCoin from "../../assets/images/ranking/bitCoin.png";
import Bar from "../../assets/images/ranking/Bar.png";

const RankingTable  = () =>{
    return(
        <>
            <div className="rankingTable">
                <Table responsive striped bordered hover >
                    <thead>
                        <tr>
                            <th className="tableCollections">COLLECTIONS</th>
                            <th>7 DAY UPVOTES</th>
                            <th>7 DAY VIEWS</th>
                            <th>FOLLOWERS</th>
                            <th>TOTAL MOMENTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="digit">1.</span> <img src={bitCoin} className="collectionsImage" alt="collectionUpvotes"/> CruptoPunks</td>
                            <td><img src={Bar} alt="Bar"/>6,473.57</td>
                            <td className="viewsdecrease">- 23.57</td>
                            <td><img src={Bar} alt="Bar"/>154,279.02</td>
                            <td><img src={Bar} alt="Bar"/>13,57</td>
                        </tr>
                        <tr>
                            <td><span className="digit">2.</span> <img src={bitCoin} className="collectionsImage" alt="collectionUpvotes"/> CruptoPunks</td>
                            <td><img src={Bar} alt="Bar"/>6,473.57</td>
                            <td className="viewsdecrease">- 23.57</td>
                            <td><img src={Bar} alt="Bar"/>154,279.02</td>
                            <td><img src={Bar} alt="Bar"/>13,57</td>
                        </tr>
                        <tr>
                            <td><span className="digit">3.</span> <img src={bitCoin} className="collectionsImage" alt="collectionUpvotes"/> CruptoPunks</td>
                            <td><img src={Bar} alt="Bar"/>6,473.57</td>
                            <td className="viewsdecrease">- 23.57</td>
                            <td><img src={Bar} alt="Bar"/>154,279.02</td>
                            <td><img src={Bar} alt="Bar"/>13,57</td>
                        </tr>
                        <tr>
                            <td><span className="digit">4.</span> <img src={bitCoin} className="collectionsImage" alt="collectionUpvotes"/> CruptoPunks</td>
                            <td><img src={Bar} alt="Bar"/>6,473.57</td>
                            <td className="viewsdecrease">- 23.57</td>
                            <td><img src={Bar} alt="Bar"/>154,279.02</td>
                            <td><img src={Bar} alt="Bar"/>13,57</td>
                        </tr>
                        <tr>
                            <td><span className="digit">5.</span> <img src={bitCoin} className="collectionsImage" alt="collectionUpvotes"/> CruptoPunks</td>
                            <td><img src={Bar} alt="Bar"/>6,473.57</td>
                            <td className="viewsdecrease">- 23.57</td>
                            <td><img src={Bar} alt="Bar"/>154,279.02</td>
                            <td><img src={Bar} alt="Bar"/>13,57</td>
                        </tr>
                        <tr>
                            <td><span className="digit">6.</span> <img src={bitCoin} className="collectionsImage" alt="collectionUpvotes"/> CruptoPunks</td>
                            <td><img src={Bar} alt="Bar"/>6,473.57</td>
                            <td className="viewsdecrease">- 23.57</td>
                            <td><img src={Bar} alt="Bar"/>154,279.02</td>
                            <td><img src={Bar} alt="Bar"/>13,57</td>
                        </tr>
                        <tr>
                            <td><span className="digit">7.</span> <img src={bitCoin} className="collectionsImage" alt="collectionUpvotes"/> CruptoPunks</td>
                            <td><img src={Bar} alt="Bar"/>6,473.57</td>
                            <td className="viewsdecrease">- 23.57</td>
                            <td><img src={Bar} alt="Bar"/>154,279.02</td>
                            <td><img src={Bar} alt="Bar"/>13,57</td>
                        </tr>
                        <tr>
                            <td><span className="digit">8.</span> <img src={bitCoin} className="collectionsImage" alt="collectionUpvotes"/> CruptoPunks</td>
                            <td><img src={Bar} alt="Bar"/>6,473.57</td>
                            <td className="viewsdecrease">- 23.57</td>
                            <td><img src={Bar} alt="Bar"/>154,279.02</td>
                            <td><img src={Bar} alt="Bar"/>13,57</td>
                        </tr>
                        <tr>
                            <td><span className="digit">9.</span> <img src={bitCoin} className="collectionsImage" alt="collectionUpvotes"/> CruptoPunks</td>
                            <td><img src={Bar} alt="Bar"/>6,473.57</td>
                            <td className="viewsdecrease">- 23.57</td>
                            <td><img src={Bar} alt="Bar"/>154,279.02</td>
                            <td><img src={Bar} alt="Bar"/>13,57</td>
                        </tr>
                        <tr>
                            <td><span className="digit">10.</span> <img src={bitCoin} className="collectionsImage" alt="collectionUpvotes"/> CruptoPunks</td>
                            <td><img src={Bar} alt="Bar"/>6,473.57</td>
                            <td className="viewsdecrease">- 23.57</td>
                            <td><img src={Bar} alt="Bar"/>154,279.02</td>
                            <td><img src={Bar} alt="Bar"/>13,57</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default RankingTable;