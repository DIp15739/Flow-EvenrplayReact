import "./ButtonFillStyle.scss";

export interface Props {
    text: any;
    onClick?: any;
}

const ButtonFill = ({text , onClick} : Props ) =>{
    return(
        <>
            <button className="buttonFill" onClick={onClick} >{text}</button>
        </>
    );
}

export default ButtonFill;