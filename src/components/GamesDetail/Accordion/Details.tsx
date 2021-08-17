import { Accordion } from 'react-bootstrap';
import Bar from "../../../assets/images/icon/detailBar.png";
import Profile from "../../../assets/images/profile/02.jpg";
import "../GamesDetailStyle.scss";

const Details = () =>{
    return(
        <>
            <div className="detailAccordianMain">
                <Accordion defaultActiveKey="0" className="detailAccordian" >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><img src={Bar} alt="detailBar"/>Details</Accordion.Header>
                        <Accordion.Body>
                            <div className="createdBy">
                                <img src={Profile} alt="profile" />
                                <h6>Created By <span>@ Username</span> </h6>
                            </div>
                            <p>Sed dictum imperdiet sapien eu scelerisque. Curabitur at dictum dolor, non lobortis purus. Mauris dapibus, tortor vitae sagittis blandit, sapien neque consequat velit, et vulputate elit risus id nisi. Fusce vitae laoreet libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed dictum imperdiet sapien eu scelerisque. Curabitur at dictum dolor, non lobortis purus. Mauris dapibus, tortor vitae sagittis blandit, sapien neque consequat velit, et vulputate elit risus id nisi. Fusce vitae laoreet libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}

export default Details;