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
function App() {
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
