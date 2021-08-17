import { Breadcrumb, Button } from "react-bootstrap";

const GameDetailBreadcrumb = () =>{
    return(
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Marketplace
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Need for Speed Heat: Keys to the Map</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
}

export default GameDetailBreadcrumb;