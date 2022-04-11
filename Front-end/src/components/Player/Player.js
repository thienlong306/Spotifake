import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import InfoSong from "../InfoSong/InfoSong";
import $ from "jquery";
class Player extends Component {
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    setInterval(() => {
      this.displayTimer();
    }, 1000);
  }
  displayTimer() {
    const { duration, currentTime } = $("audio")[0];
    $(".timer__right").html(this.formatTimer(duration));
    $(".timer__left").html(this.formatTimer(currentTime));
    $(".range")[0].max = duration;
    $(".range")[0].value = currentTime;
    if (currentTime === duration) {
      this.selectPlaySong(this.props.player.indexSongPlaying + 1);
    }
  }
  formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    if (seconds < 10) return `${minutes}:0${seconds}`;
    else return `${minutes}:${seconds}`;
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
  updateRange = () => {
    $("audio")[0].currentTime = $(".range")[0].value;
  };
  updateVolume = () => {
    $("audio")[0].volume = $(".volume")[0].value / 100;
  };
  isLoop = () => {
    if ($(".play-repeat")[0].style.color != "yellow") {
      $(".play-repeat")[0].style.color = "yellow";
      $(".play-repeat")[0].style.webkitTransform = "rotate(360deg)";
    } else {
      $(".play-repeat")[0].style.color = "#000";
      $(".play-repeat")[0].style.webkitTransform = "rotate(0)";
    }
    this.props.setIsLoop();
  };
  isShuffle = () => {
    if (!this.props.player.isShuffle) {
      $(".shuffle-song")[0].style.color = "yellow";
    } else {
      $(".shuffle-song")[0].style.color = "#000";
    }
    this.props.setIsShuffle();
  };
  selectPlaySong = (idSong) => {
    if (this.props.player.isShuffle) {
      this.props.selectPlaySong(
        Math.floor(Math.random() * this.props.song.song.length),
        this.props.song.song[0].id
      );
    } else {
      this.props.selectPlaySong(
        idSong,
        this.props.song.song[0].id,
        this.props.song.song[0].id
      );
    }
  };
  heartBtn = () => {
    if ($("#heart").hasClass( "far")) {
      $("#heart").toggleClass("far");
      $("#heart").toggleClass("fas");
      $("#heart").css("color","red");
    }
    else {
      $("#heart").toggleClass("far");
      $("#heart").toggleClass("fas");
      $("#heart").css("color","#676669");
    }
  };
  render() {
    return (
      <div className="player-song">
        <div className="play-song">
          <div className="play-control">
            <div className="play-control__act">
              <i
                className="far fa-heart"
                id="heart"
                onClick={() => {
                  this.heartBtn();
                }}
              ></i>
              {/* <i className="fas fa-music"></i>
              <i className="fas fa-expand-alt"></i> */}
            </div>
            <div className="play-control__main">
              <i
                className="fas fa-redo-alt play-repeat active"
                onClick={() => {
                  this.isLoop();
                }}
              ></i>
              <i
                className="fas fa-fast-backward play-backward main-icon"
                onClick={() => {
                  this.selectPlaySong(
                    this.props.player.indexSongPlaying - 1,
                    this.props.song.song[0].id
                  );
                }}
              ></i>
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
              <i
                className="fas fa-fast-forward play-forward main-icon"
                onClick={() => {
                  this.selectPlaySong(
                    this.props.player.indexSongPlaying + 1,
                    this.props.song.song[0].id
                  );
                }}
              ></i>
              <i
                className="fas fa-random shuffle-song"
                onClick={() => {
                  this.isShuffle();
                }}
              ></i>
            </div>
            <div className="play-control__volume">
              <i className="fas fa-volume-down"></i>
              <input
                type="range"
                id="volume"
                className="volume"
                defaultValue={100}
                onChange={() => {
                  this.updateVolume();
                }}
              />
            </div>
          </div>
          <div className="play-seekbar">
            <div className="timer__left">0:00</div>
            <input
              type="range"
              name="range"
              id="range"
              className="range"
              defaultValue={0}
              onChange={() => {
                this.updateRange();
              }}
            />
            <audio
              autoPlay
              crossOrigin="anonymous"
              src={this.props.player.songURL}
              id="audio"
              loop={this.props.player.isLoop}
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
    song: state.song,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setIsPlaying: () => {
      dispatch({
        type: "SET-ISPLAYING",
      });
    },
    setIsLoop: () => {
      dispatch({
        type: "SET-ISLOOP",
      });
    },
    setIsShuffle: () => {
      dispatch({
        type: "SET-ISSHUFFLE",
      });
    },
    selectPlaySong: (idSong, idFirstSong) => {
      dispatch({
        type: "SELECT-PLAY-SONG",
        idSong,
        idFirstSong,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
