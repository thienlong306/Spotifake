import React, { Component } from "react";
import { connect } from "react-redux";
import InfoSong from "../InfoSong/InfoSong";
import $ from "jquery";
class Player extends Component {
  componentDidMount() {
    $("audio")[0].onloadedmetadata=function(){
      let min_d = isNaN(this.duration) === true ? "0" : Math.floor(this.duration / 60);
      min_d = min_d < 10 ? "0" + min_d : min_d;
      let sec_d;
      if (Math.floor(this.duration) >= 60) {
        for (var i = 1; i <= 60; i++) {
          if (Math.floor(this.duration) >= 60 * i && Math.floor(this.duration) < 60 * (i + 1)) {
            sec_d = Math.floor(this.duration) - 60 * i;
            sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
          }
        }
      } else {
        sec_d = isNaN(this.duration) === true ? "0" : Math.floor(this.duration);
        sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
      }
      $(".timer__right").html(min_d+":"+sec_d);
    };
  }
  
  setIsPlaying = () => {
    if (this.props.player.isPlaying) {
      $("audio")[0].pause();
      this.props.setIsPlaying();
    } else {
      $("audio")[0].play();
      this.props.setIsPlaying();
    }
  };
  render() {
    return (
      <div className="player-song">
        <div className="play-song">
          <div className="play-control">
            <div className="play-control__act">
              <i className="far fa-heart" id="heart"></i>
              <i className="fas fa-music"></i>
              <i className="fas fa-expand-alt"></i>
            </div>
            <div className="play-control__main">
              <i className="fas fa-redo-alt play-repeat"></i>
              <i className="fas fa-fast-backward play-backward main-icon"></i>
              {/* <i className="fas fa-pause-circle pause-icon main-icon main-icon--big"></i> */}
              <span className="play-inner">
                <i
                  className={`fas fa-${
                    this.props.player.isPlaying ? "pause" : "play"
                  }-circle main-icon main-icon--big`}
                  onClick={() => {
                    this.setIsPlaying();
                  }}
                ></i>
              </span>
              <i className="fas fa-fast-forward play-forward main-icon"></i>
              <i className="fas fa-random shuffle-song"></i>
            </div>
            <div className="play-control__volume">
              <i className="fas fa-volume-down"></i>
              <input type="range" id="volume" className="volume" />
            </div>
          </div>
          <div className="play-seekbar">
            <div className="timer__left">0:00</div>
            <input type="range" name="range" id="range" className="range" />
            <audio
              autoPlay
              crossOrigin="anonymous"
              src={this.props.player.songURL}
              id="audio"
            ></audio>
            <div className="timer__right">0:00</div>
          </div>
          <InfoSong></InfoSong>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    player: state.player,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setIsPlaying: () => {
      dispatch({
        type: "SET-ISPLAYING",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
