import sortBy from "../../../assets/images/marketPlace/sortBy.png";
import {Dropdown} from "react-bootstrap";

const NFTSortBy = () =>{
    return(
        <>
            <div className="sortBy">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <img src={sortBy} alt="sortbyIcon"/>SORT BY
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    );
}

export default NFTSortBy;