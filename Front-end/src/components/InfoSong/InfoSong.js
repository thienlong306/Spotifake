import React, { Component } from "react";
import { connect } from "react-redux";
class InfoSong extends Component {
  render() {
    return (
      <div className="sidebar__suggest-album">
        <div className="suggest-album">
          <div className="suggest-album__img-container">
            <img src={this.props.player.imageSongURL!=null?this.props.player.imageSongURL:require("../../images/null.jpg")} alt="" />
          </div>
          <div className="suggest-album__content">
            <div className="suggest-album__info">
              <h4>{this.props.player.nameSong!=null?this.props.player.nameSong.split('.')[1]:""}</h4>
              <p>{this.props.player.nameSong!=null?this.props.player.nameSong.split('.')[0]:""}</p>
            </div>
            {/* <i className="far fa-plus-square"></i> */}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    player: state.player
  }
}
export default connect(mapStateToProps)(InfoSong)
