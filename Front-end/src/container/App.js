import Navbar from './Navbar';
import '../styles/App.css'
import MainContent from './MainContent';
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
function App() {
  return (
    <div className="App">
    <div id="main">
      <div id="container">
          <Router>
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/">
                <MainContent></MainContent>
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
      </div>
    </div>
  </div>
  );
}

export default App;
