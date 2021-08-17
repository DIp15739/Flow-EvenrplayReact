import {Table} from "react-bootstrap";
import creatorProfile1 from "../../../assets/images/profile/01.jpg";
import creatorProfile2 from "../../../assets/images/profile/02.jpg";
import creatorProfile3 from "../../../assets/images/profile/03.jpg";
import creatorProfile4 from "../../../assets/images/profile/04.jpg";

const CreatorsTable = () =>{
    return(
        <>
            <div className="creatorsTable">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>CREATOR</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={creatorProfile1} alt="creatorProfile"/>Name of creator</td>
                            <td>$456,792</td>
                        </tr>
                        <tr>
                            <td><img src={creatorProfile2} alt="creatorProfile"/>The long name of creator</td>
                            <td>$456,500</td>
                        </tr>
                        <tr>
                            <td><img src={creatorProfile3} alt="creatorProfile"/>The long name of creator</td>
                            <td>$456,500</td>
                        </tr>
                        <tr>
                            <td><img src={creatorProfile4} alt="creatorProfile"/>The long name of creator</td>
                            <td>$456,500</td>
                        </tr>
                        <tr>
                            <td><img src={creatorProfile1} alt="creatorProfile"/>The long name of creator</td>
                            <td>$456,500</td>
                        </tr>
                        <tr>
                            <td><img src={creatorProfile2} alt="creatorProfile"/>The long name of creator</td>
                            <td>$456,500</td>
                        </tr>
                        <tr>
                            <td><img src={creatorProfile3} alt="creatorProfile"/>The long name of creator</td>
                            <td>$456,500</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default CreatorsTable;