import "./ButtonFillStyle.scss";

const ButtonFill = ({text} : {text:any}) =>{
    return(
        <>
            <button className="buttonFill" >{text}</button>
        </>
    );
}

export default ButtonFill;