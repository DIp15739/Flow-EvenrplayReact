import companyLogo from "../../../assets/images/header/everplayLogo.png";

const FooterLogo = () =>{
    return(
        <>
            <div className="footerLogo">
                <img src={companyLogo} alt="companyLogo"/>
            </div>
        </>
    );
}

export default FooterLogo;