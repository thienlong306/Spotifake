import React, { Component } from "react";
import InfoSong from "../components/InfoSong/InfoSong";
import { connect } from "react-redux";
import '../styles/Sidebar.css'
import Player from "../components/Player/Player";
import $ from "jquery"
class Sidebar extends Component {
  clickHideSideBar=()=>{
    $("#sidebar").removeClass("active"); 
  }
  render() {
    return (
      <div id="sidebar">
        <div className="sidebar__shortcuts">
        <p className="sidebar__shortcuts-title">Shortcuts
          <i className="fas fa-stream js-hide-sidebar" onClick={()=>{this.clickHideSideBar()}} />
        </p>
        <div className="sidebar__shortcuts-items">
          <span className="sidebar__shortcuts-item">Chill
            <img src={require("../images/snow.png")} alt="" />
          </span>
          <span className="sidebar__shortcuts-item">Hot
            <img src={require("../images/star.png")} alt="" />
          </span>
          <span className="sidebar__shortcuts-item">Piano instrumental
            <img src={require("../images/piano.png")} alt="" />
          </span>
          <span className="sidebar__shortcuts-item">Jazz
            <img src={require("../images/jazz.png")} alt="" />
          </span>
          <span className="sidebar__shortcuts-item">Acoustic
            <img src={require("../images/ghitar.png")} alt="" />
          </span>
        </div>
      </div>
        <div className="sidebar__shortcuts">
          <p className="sidebar__shortcuts-title">
            Trending Artists
          </p>
          <div className="sidebar__favorite-list">
            <div className="artist-info__avt">
              <img src={require("../images/tóc-tiên.jpg")} alt="" />
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
              <img src={require("../images/min.jpg")}alt="" />
            </div>
            <div className="artist-info">
              <h4 className="artist-info__name">Min</h4>
              <p className="artist-info__song">5 songs in library</p>
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          {/*    ARTIST 3    */}
          <div className="sidebar__favorite-list">
            <div className="artist-info__avt">
              <img src={require("../images/đen.jpg")}alt="" />
            </div>
            <div className="artist-info">
              <h4 className="artist-info__name">Đen Vâu</h4>
              <p className="artist-info__song">10 songs in library</p>
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Sidebar;
