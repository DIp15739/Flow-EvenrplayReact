import HomeMain from "../../components/Home/HomeMain";
import "./HomeScreenStyle.scss";
import FooterMain from "../../components/Layout/Footer/FooterMain";

const HomeScreen: React.FC = () =>{
    return(
        <>
            <div className="pageContent">
                <HomeMain />
            </div>
            <FooterMain />
        </>
    );
}

export default HomeScreen;