import React, { Component } from "react";
import '../styles/Home.css';
import '../styles/Discover.css';
import Player from "../components/Player/Player";
import ListChart from "../components/ListChart/ListChart";

class Discover extends Component {
  render() {
    return (
      <div id="main-content">
      <header>
        <nav className="main-content__header-nav">
          <i className="fas fa-bars bars-left" />
          {/* <i class="fas fa-arrow-left"></i>
                      <i class="fas fa-arrow-right"></i> */}
        </nav>
        <div className="main-content__search-form">
          <i className="fas fa-search search-btn" />
          <input type="text" className="search-input" placeholder="Search for artist, songs....." />
        </div>
        <i className="fas fa-bars bars-right" />
      </header>
      <div className="my-playlist">
        <div className="playlist-head">
          <h4>Discover Tracks and Playlists</h4>
          {/* <a class="btn-hover">Show all</a> */}
        </div>
        <div className="list_discover">
          <ListChart></ListChart>
          <ListChart></ListChart>
          <ListChart></ListChart>
        </div>
      </div>
    </div>
    );
  }
}

export default Discover;
