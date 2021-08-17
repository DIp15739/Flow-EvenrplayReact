import "./GameListStyle.scss";

export interface Props {data:any};
const GameList = ({data}: Props) =>{
    return(
        <>
            <div className="gameListMain">
                <img src={data.gameImage} alt="Topgame" />
                <div className="gameListDetail">
                    <h4>{data.gameTitle}</h4>
                    <h6><i className="fas fa-eye"></i>{data.gameViewers}</h6>
                </div>
            </div>
        </>
    );
}

export default GameList;