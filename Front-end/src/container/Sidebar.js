import React, { Component } from "react";
import '../styles/Sidebar.css'
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

        <div className="sidebar__suggest-album">
          <div className="suggest-album">
            <div className="suggest-album__img-container">
              <img src="./img/ngô-lan-hương.jpg" alt="" />
            </div>
            <div className="suggest-album__content">
              <div className="suggest-album__info">
                <h4>Anh muốn đưa em về không</h4>
                <p>Ngô Lan Hương</p>
              </div>
              <i className="far fa-plus-square"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
