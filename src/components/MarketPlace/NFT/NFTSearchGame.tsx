import { useState } from "react";
import Input from "../../Common/Input/Input";
import {Col} from "react-bootstrap";

const NFTSearchGame = () =>{
    const [search, setSearch] = useState('');
    return(
        <>
            <Col xl={3} lg={6}>
                <div className="searchGame">
                    <Input type="search" value={search} onChange={setSearch} placeholder="Search For Game" />
                    <i className="fas fa-search"></i>
                </div>
            </Col>
        </>
    );
}

export default NFTSearchGame;