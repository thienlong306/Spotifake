import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../Search/Search";
class ShowList extends Component {
  componentDidMount(){
    if(this.props.song.playlist==null){
      this.props.changeListTrending("POP"); 
    }else
      this.props.changeListTrending(this.props.song.playlist); 
    
  }
  isChange=(event)=>{
    this.props.changeListTrending(event.target.value);
  }
  render() {
    return (
      <div id="main-content">
        <Search></Search>
        <div>
        <p className="main-content__des">What's hot<span><img src={require("../../images/fire.png")} alt="" width="16px" height="17px" /></span></p>
        <div className="main-content__trend">
          <div className="main-content__trend-title">Trending</div>
          <div className="main-content__trend-more btn-hover">
            More
            <span><i className="fas fa-chevron-right" /></span>
          </div>
        </div>
        <div className="main-content__banner">
          <p className="main-content__banner-artist">Artist</p>
          <h4 className="main-content__banner-des">On Top Of The World</h4>
          <div className="main-content__banner-btn">
            <button className="play-btn">PLAY</button>
            <button className="follow-btn">FOLLOW</button>
          </div>
          <span className="main-content__view">Monthly listeners
            <p>50.000</p>
          </span>
        </div>
      </div>
        <div className="my-playlist">
          <div className="playlist-head">
            <h4>
              <div className="select is-medium" onChange={(event)=>{this.isChange(event)}}>
                <select defaultValue={this.props.song.playlist}>
                  <option value={"POP"}>Popular Song</option>
                  <option value={"K-POP"}>Popular Korean songs</option>
                  <option value={"V-POP"}>Popular Vietnamese songs</option>
                </select>
              </div>
            </h4>
            <a className="btn-hover">Show all</a>
          </div>
          <div className="playlist playlist-list__title">
            <p className="playlist__title">TITLE</p>
            <p className="playlist__artist">ARTIST</p>
            <p className="playlist__time">TIME</p>
          </div>
          <div className="box_list">
            <div className="playlist-list">{this.props.list}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    song: state.song,
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
export default connect(mapStateToProps,mapDispatchToProps)(ShowList)
