import Banner from "../../assets/images/marketPlace/marketPlace.jpg";
import "./MarketPlaceStyle.scss";

const MarketPlaceBanner = () =>{
    return(
        <>
            <div className="homeBannerMain rankingBannerMain marketPlaceBannerMain">
                <img src={Banner} alt="Banner"/>
                <div className="homeBannerContent rankingBannerContent">
                    <h2>MARKETPLACE</h2>
                </div>
            </div>

            {/* RESPONSIVE CODE START */}
            <div className="marketPlaceBannerMainResponsive">
                <h2>Marketplace</h2>
            </div>
        </>
    );
}

export default MarketPlaceBanner;