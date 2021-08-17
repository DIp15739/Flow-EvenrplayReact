import HomeBanner from "./HomeBanner";
import HomeTopGames from "./HomeTopGames";
import HomeResponsiveTopGames from "./HomeResponsiveTopGames";
import HomeTopCreators from "./HomeTopCreators";

const HomeMain = () =>{
    return(
        <>
            <HomeBanner />
            <HomeTopGames />
            <HomeResponsiveTopGames />
            <HomeTopCreators />
        </>
    );
}

export default HomeMain;