import Slider from "react-slick";
import GameList from "../Common/GamesList/GamesList";
import callOfDuty from "../../assets/images/home/callOfDuty.jpg";
import fifa from "../../assets/images/home/fifa.jpg";
import fallOut from "../../assets/images/home/fallOut.jpg";
import "./HomeStyle.scss";

const HomeResponsiveTopGames = () =>{
    var settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      centerMode: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
          }
        },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 320,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              dots: false,
              arrows: false,
            }
          },  
      ]
    };
    
    const data1 = [
      {
          id: 1,
          gameImage: callOfDuty,
          gameTitle: "Call Of Duty Black Ops 4",
          gameViewers: "73,032 viewers"
      },
      {
          id: 2,
          gameImage: fifa,
          gameTitle: "Fifa 19",
          gameViewers: "54,032 viewers"
      },
      {
          id: 3,
          gameImage: fallOut,
          gameTitle: "Fallout 76",
          gameViewers: "24,002 viewers"
      },
      {
          id: 4,
          gameImage: fifa,
          gameTitle: "Fifa 19",
          gameViewers: "54,032 viewers"
      },
      {
          id: 5,
          gameImage: fallOut,
          gameTitle: "Fallout 76",
          gameViewers: "24,002 viewers"
      },
      {
          id: 6,
          gameImage: callOfDuty,
          gameTitle: "Call Of Duty Black Ops 4",
          gameViewers: "73,032 viewers"
      },
  ]

    return(
        <>
            <div className="sliderMain sideMargin">
                <Slider {...settings}>
                  {data1.map((d:any,i:any) => (
                      <div>
                          <GameList data={d} />
                      </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default HomeResponsiveTopGames;