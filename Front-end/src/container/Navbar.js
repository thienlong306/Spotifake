import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <i className="navbar__logo fab fa-forumbee"></i>
                    <span className="navbar__primary-text">Spotifake </span><span>Music</span>
                </div>
                <div className="navbar-content">
                    <nav>
                        <li className="navbar-content__icon">
                            <Link to="/"><i className="fas fa-home"></i>Home</Link>
                        </li>
                        <li className="navbar-content__icon">
                            <Link to="/discover"><i className="fas fa-compass"></i>Discover</Link>
                        </li>
                    </nav>
                    <nav>
                        <p className=" navbar-content__title">Your Collection</p>
                        <ul>
                            <li className="navbar-content__icon">
                                <a href="#"><i className="fas fa-heart"></i>Favorite Songs</a>
                            </li>
                            <li className="navbar-content__icon">
                                <a href="#"><i className="fas fa-users"></i>Artist</a>
                            </li>
                            <li className="navbar-content__icon">
                                <a href="#"><i className="fas fa-star"></i>Albums</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="navbar-user">
                <div className="navbar-user__container row">
                    <div className="col-6 d-flex justify-content-center">
                        <Link to="/signup"><button type="button" className="btn btn-light">Sign Up</button></Link>
                        <a href="./content/signup.html"></a>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <Link to="/signin"><button type="button" className="btn btn-dark">Sign In</button></Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Navbar;