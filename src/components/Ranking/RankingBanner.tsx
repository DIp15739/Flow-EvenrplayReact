import Banner from "../../assets/images/ranking/rankingBanner.jpg";
import "./RankingStyle.scss";

const RankingBanner = () =>{
    return(
        <>
            <div className="homeBannerMain rankingBannerMain">
                <img src={Banner} alt="Banner"/>
                <div className="homeBannerContent rankingBannerContent">
                    <h2>RANKINGS</h2>
                </div>
            </div>
        </>
    );
}

export default RankingBanner;