import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import $ from "jquery";
class Navbar extends Component {
  darkMode = () => {
    if ($("#container").hasClass("dark-theme")) {
      $("#container").toggleClass("dark-theme");
      // blackThemeCanvas.classList.remove('dark-theme');
      $(".ball").css("left", "2px");
    } else {
      // blackThemeCanvas.classList.add('dark-theme');
        $("#container").toggleClass("dark-theme");
        $(".ball").css("left", "22px");
    }
  }
  clickHideNavBar=()=>{
    $("#navbar").removeClass("active"); 
  }
  render() {
    return (
      <div id="navbar">
        <div className="navbar-container pb-3">
          <header>
            <span
              onClick={() => {
                this.darkMode();
              }}
              className="check"
            >
              <span className="ball"></span>
            </span>
            <i className="fas fa-stream js-hide-navbar" onClick={()=>{this.clickHideNavBar()}}></i>
          </header>
          <div className="logo">
            <i className="navbar__logo fab fa-forumbee" />
            <span className="navbar__primary-text">Spotifake </span>
            <span>Music</span>
          </div>
          <div className="navbar-content">
            <nav>
              <li className="navbar-content__icon">
                <Link to="/">
                  <i className="fas fa-home" />
                  Home
                </Link>
              </li>
              <li className="navbar-content__icon">
                <Link to="/trending">
                  <i className="fas fa-chart-line" />
                  Trending
                </Link>
              </li>
              <li className="navbar-content__icon">
                <Link to="/discover">
                  <i className="fas fa-compass" />
                  Discover
                </Link>
              </li>
            </nav>
            <nav>
              <p className=" navbar-content__title">Feed</p>
              <ul>
                <li className="navbar-content__icon">
                  <a href="">
                    <i className="far fa-newspaper" />
                    New and Notable
                  </a>
                </li>
                <li className="navbar-content__icon">
                  <a href="">
                    <i className="fas fa-calendar-alt" />
                    Realese Calendar
                  </a>
                </li>
                <li className="navbar-content__icon">
                  <a href="">
                    <i className="fas fa-ticket-alt" />
                    Events
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <p className=" navbar-content__title">Your Collection</p>
              <ul>
                <li className="navbar-content__icon">
                  <a href="">
                    <i className="fas fa-heart" />
                    Favorite Songs
                  </a>
                </li>
                <li className="navbar-content__icon">
                  <a href="">
                    <i className="fas fa-users" />
                    Artist
                  </a>
                </li>
                <li className="navbar-content__icon">
                  <a href="">
                    <i className="fas fa-star" />
                    Albums
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="navbar-user">
          <div className="navbar-user__container">
            <div className="user-avt">
              <img src={require("../images/User.png")} alt="" />
            </div>
            <div className="user-name">No Name</div>
            <a href="">
              <button className="btn button_Upgrade">Upgrade</button>
            </a>
          </div>
        </div>
        
        {/* <div className="navbar-user">
                        <div className="navbar-user__container row">
                            <div className="col-6 d-flex justify-content-center">
                                <Link to="/signup"><button type="button" className="btn btn-light">Sign Up</button></Link>
                                <a href="./content/signup.html"></a>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <Link to="/signin"><button type="button" className="btn btn-dark">Sign In</button></Link>
                            </div>
                        </div>
                    </div> */}
      </div>
    );
  }
}

export default Navbar;
