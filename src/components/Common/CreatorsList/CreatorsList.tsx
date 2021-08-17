import "./CreatorsListStyle.scss";
import { Link } from "react-router-dom";

export interface Props {data:any};
const CreatorsList = ({data}: Props) =>{
    return(
        <>
            <div className="creatorsListMain">
                <img src={data.creatorsImage} alt="Metro" className="img-fluid" />
                <div className="creatorsListDetail">
                    <div className="creatorsName">
                        <Link to={data.Link} ><h4>{data.creatorsTitle}</h4></Link>
                        <h6>{data.creatorsUsername}</h6>
                    </div>
                    <div className="creatorsPrice">
                        <h4>{data.creatorsPriceTitle}</h4>
                        <h6>{data.creatorsPrice}</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreatorsList;