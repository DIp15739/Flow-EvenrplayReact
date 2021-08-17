import {Modal, Button, Accordion} from "react-bootstrap";
import sortByWhite from "../../../assets/images/marketPlace/sortByWhite.png";

const SortBy = () =>{
    return(
        <>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <div className="statusLabel">
                        <img src={sortByWhite} className="img-fluid" alt="statusIcon" />
                        <span>Sort By</span>
                    </div>
                </Accordion.Header>
                <Accordion.Body></Accordion.Body>
            </Accordion.Item>
        </>
    );
}

export default SortBy;