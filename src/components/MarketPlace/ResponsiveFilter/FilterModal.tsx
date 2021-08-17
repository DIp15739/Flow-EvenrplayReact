import {Modal, Button, Accordion} from "react-bootstrap";
import sortByWhite from "../../../assets/images/marketPlace/sortByWhite.png";
import dollarWhite from "../../../assets/images/marketPlace/dollarWhite.png";
import Status from "./Status";
import SortBy from "./SortBy";
import Price from "./Price";
import "./ResponsiveFilterStyle.scss";

interface show {
    show: any;
    onHide: any;
}

const FilterModal = (props:show) =>{
    return(
        <>
            <Modal {...props} className="modalFilter" aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Accordion>
                        <SortBy />
                        <Status />
                        <Price />
                    </Accordion>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default FilterModal;