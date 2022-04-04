import React, { Component } from 'react';

class ShowList extends Component {
    render() {
        return (
            <div id="main-content">
            <header>
              <nav className="main-content__header-nav">
                <i className="fas fa-bars bars-left"></i>
                {/* <i className="fas fa-arrow-left"></i>
                        <i className="fas fa-arrow-right"></i> */}
              </nav>
              <div className="main-content__search-form">
                <i className="fas fa-search search-btn"></i>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for artist, songs....."
                />
              </div>
              <i className="fas fa-bars bars-right"></i>
            </header>
            <div className="my-playlist">
              <div className="playlist-head">
                <h4>{this.props.title}</h4>
                {/* <a className="btn-hover">Show all</a> */}
              </div>
              <div className="playlist playlist-list__title">
                <p className="playlist__number">#</p>
                <p className="playlist__title">TITLE</p>
                <p className="playlist__artist">ARTIST</p>
                <p className="playlist__time">TIME</p>
              </div>
              <div className="playlist-list">{this.props.list}</div>
            </div>
          </div>
        );
    }
}

export default ShowList;