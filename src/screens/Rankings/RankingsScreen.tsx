import RankingMain from "../../components/Ranking/RankingMain";
import FooterMain from "../../components/Layout/Footer/FooterMain";
import "./RankingsScreenStyle.scss";

const RankingsScreen: React.FC = () =>{
    return(
        <>
            <div className="pageContent">
                <RankingMain />
            </div>
            <FooterMain />
        </>
    );
}

export default RankingsScreen;