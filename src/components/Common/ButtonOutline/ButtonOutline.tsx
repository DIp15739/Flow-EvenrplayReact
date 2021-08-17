import "./ButtonOutlineStyle.scss";

const ButtonOutline = ({text} : {text:any} ) =>{
    return(
        <>
            <button className="buttonOutline" >{text}</button>
        </>
    );
}

export default ButtonOutline;