import React, { Component } from "react";
import { connect } from "react-redux";
class ShowList extends Component {
  componentDidMount(){
    this.props.changeListTrending("POP"); 
  }
  isChange=(event)=>{
    this.props.changeListTrending(event.target.value);
  }
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
            <h4>
              <div className="select is-medium" onChange={(event)=>{this.isChange(event)}}>
                <select>
                  <option value={"POP"}>Popular Song</option>
                  <option value={"K-POP"}>Popular Korean songs</option>
                  <option value={"V-POP"}>Popular Vietnamese songs</option>
                </select>
              </div>
            </h4>
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
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeListTrending: (playlist) => {
      dispatch({
        type:"CHANGE-LIST-TRENDING",
        playlist,
      });
    },
  };
}
export default connect(null,mapDispatchToProps)(ShowList)
