import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Banner1 from "../../assets/images/home/homePage.jpg";
import Banner2 from "../../assets/images/common/seaodThieves.jpg";
import Banner3 from "../../assets/images/common/callOfDutyColdWar.jpg";
import "./HomeStyle.scss";

const HomeBanner = () =>{
    return(
        <>
            <div>
                <Carousel showArrows={false} showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay={true}>
                    <div className="homeBannerMain">
                        <img src={Banner1} />
                        <div className="homeBannerContent">
                            <h2>NFT GAMING CLIPS </h2>
                            <p>BUY, SELL AND RELIVE THE <br /> TOP GAMING MOMENTS</p>
                        </div>
                    </div>
                    <div className="homeBannerMain">
                        <img src={Banner2} />
                        <div className="homeBannerContent">
                            <h2>NFT GAMING CLIPS </h2>
                            <p>BUY, SELL AND RELIVE THE <br /> TOP GAMING MOMENTS</p>
                        </div>
                    </div>
                    <div className="homeBannerMain">
                        <img src={Banner3} />
                        <div className="homeBannerContent">
                            <h2>NFT GAMING CLIPS </h2>
                            <p>BUY, SELL AND RELIVE THE <br /> TOP GAMING MOMENTS</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    );
}

export default HomeBanner;