import Navbar from './Navbar';
import '../styles/App.css'
import Home from './Home';
import Discover from './Discover'
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import Player from '../components/Player/Player';
import InfoSong from '../components/InfoSong/InfoSong';
import Trending from './Trending';
import $ from "jquery"
function App() {
  $("body").click(function (e) {
    if (!$(".infoSearhResult").is(e.target) && $(".infoSearhResult").has(e.target).length === 0&&!$(".searhInfoInput").is(e.target) && $(".searhInfoInput").has(e.target).length === 0)
    {
      $(".infoSearhResult").removeClass("active");
    }
  });
  return (
    <div className="App">
    <div id="main">
      <div id="container">
          <Router>
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/">
                <Home></Home>
                <Sidebar></Sidebar>
              </Route>
              <Route exact path="/trending">
                <Trending></Trending>
                <Sidebar></Sidebar>
              </Route>
              <Route path="/discover">
                <Discover></Discover>
                <Sidebar></Sidebar>
              </Route>
              <Route path="/signin">
                <SignIn></SignIn>
              </Route>
              <Route path="/signup">
                <SignUp></SignUp>
              </Route>
            </Switch>
          </Router>
          <Player></Player>
      </div>
    </div>
  </div>
  );
}

export default App;
