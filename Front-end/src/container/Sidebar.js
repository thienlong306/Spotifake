import React, { Component } from "react";
import InfoSong from "../components/InfoSong/InfoSong";
import { connect } from "react-redux";
import '../styles/Sidebar.css'
import Player from "../components/Player/Player";
class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="sidebar__shortcuts">
          <p className="sidebar__shortcuts-title">
            Trending Artists
            <i className="fas fa-stream js-hide-sidebar"></i>
          </p>
          {/*    ARTIST 1    */}
          <div className="sidebar__favorite-list">
            <div className="artist-info__avt">
              <img src="./img/tóc-tiên.jpg" alt="" />
            </div>
            <div className="artist-info">
              <h4 className="artist-info__name">Tóc Tiên</h4>
              <p className="artist-info__song">6 songs in library</p>
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>

          {/*    ARTIST 2    */}
          <div className="sidebar__favorite-list">
            <div className="artist-info__avt">
              <img src="./img/min.jpg" alt="" />
            </div>
            <div className="artist-info">
              <h4 className="artist-info__name">Min</h4>
              <p className="artist-info__song">5 songs in library</p>
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <div className="sidebar__favorite">
          <p className="sidebar__favorite-title">Favorite Artists</p>
          {/*    ARTIST 1    */}
          <div className="sidebar__favorite-list">
            <div className="artist-info__avt">
              <img src="./img/tóc-tiên.jpg" alt="" />
            </div>
            <div className="artist-info">
              <h4 className="artist-info__name">Tóc Tiên</h4>
              <p className="artist-info__song">6 songs in library</p>
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>

          {/*    ARTIST 2    */}
          <div className="sidebar__favorite-list">
            <div className="artist-info__avt">
              <img src="./img/min.jpg" alt="" />
            </div>
            <div className="artist-info">
              <h4 className="artist-info__name">Min</h4>
              <p className="artist-info__song">5 songs in library</p>
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <InfoSong></InfoSong>
      </div>
    );
  }
}
  
export default Sidebar;
