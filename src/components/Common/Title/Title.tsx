import {Link} from "react-router-dom";
import "./TitleStyle.scss";

export interface Props {data:any};

const Title = ({data}: Props) =>{
    return(
        <>
            <div className="TitleMain">
                <h4>{data.head}</h4>
                <Link to="" >{data.all}{data.title}</Link>
            </div>
        </>
    );
}

export default Title;