import GameImage from "../../assets/images/nft/nft.png";
import "./GamesDetailStyle.scss";
import { Col } from "react-bootstrap";

interface props {
  data: any;
}

const GameDetailImage = ({ data }: props) => {
  return (
    <>
      <div className="gameImage">
        <Col className="p-0">
          {data === null ? (
            <img src={GameImage} alt="gameImage" />
          ) : (
            <video loop controls width="103%">
              <source
                src={`https://ipfs.io/ipfs/${data.uri.split("://")[1]}`}
                type="video/mp4"
              />
            </video>
          )}
        </Col>
        <Col className="p-0">
          {data === null ? (
            <div className="gameViewDate">
              <p>Jan 26 2021</p>
              <p>
                <i className="fas fa-eye"></i>143,566
              </p>
            </div>
          ) : (
            <div className="gameViewDate">
              <p>{data.date}</p>
              <p>
                <i className="fas fa-eye"></i>
                {data.view}
              </p>
            </div>
          )}
        </Col>
      </div>
    </>
  );
};

export default GameDetailImage;
