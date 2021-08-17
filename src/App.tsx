import React from 'react';
import { BrowserRouter,Route,Switch  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomeScreen from "./screens/Home/HomeScreen";
import RankingsScreen from './screens/Rankings/RankingsScreen';
import MarketPlaceScreen from './screens/MarketPlace/MarketPlaceScreen';
import GameDetailScreen from './screens/GameDetail/GameDetailScreen';
import Header from './components/Layout/Header/Header';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import AppMain from './routes';

class App extends React.Component {
    render() {
      return (
        <>
          <BrowserRouter>
            <Header withoutLogin />
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/ranking" component={RankingsScreen} />
              <Route exact path="/marketplace" component={MarketPlaceScreen}/>
              <Route exact path="/detail" component={GameDetailScreen} />
            </Switch>
          </BrowserRouter>
        </>
      );
    }
}

export default App;
