import React, { Component } from "react";
import "../styles/Home.css";
import "../styles/App.css";
import { connect } from "react-redux";
import Player from "../components/Player/Player";
import $ from "jquery";
import ShowList from "../components/ShowList/ShowList";
class Home extends Component {
  selectPlaySong = (idSong) => {
    this.props.selectPlaySong(idSong,this.props.song.song[0].id); 
  };
  mapSong = () =>
  this.props.song.song.map((value, key) => {
    const tmp = value.name.split(".");
    return (
      <div
        className={`playlist playlist--hover ${value.id==this.props.player.indexSongPlaying?"active":""}`}
        key={key}
        onClick={(idSong) => this.selectPlaySong(key)
        }
      >
        <p className=" playlist__number">{key}</p>
        <p className=" playlist__title">{value.artist}</p>
        <p className=" playlist__artist">{value.name}</p>
        <p className=" playlist__time">0</p>
      </div>
    );
  });

  render() {
    return (
        <ShowList list={this.props.song!=null?this.mapSong():""}></ShowList>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    song: state.song,
    player: state.player,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectPlaySong: (idSong,idFirstSong) => {
      dispatch({
        type: "SELECT-PLAY-SONG",
        idSong,
        idFirstSong,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
