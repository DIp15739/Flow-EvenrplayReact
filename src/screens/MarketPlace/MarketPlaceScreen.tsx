import "./MarketPlaceScreenStyle.scss";
import FooterMain from "../../components/Layout/Footer/FooterMain";
import MarketPlaceMain from "../../components/MarketPlace/MarketPlaceMain";

const MarketPlaceScreen = () =>{
    return(
        <>
            <div className="pageContent">
                <MarketPlaceMain />
            </div>
            <FooterMain />
        </>
    );
}

export default MarketPlaceScreen;;