import React, { Component } from "react";
import "../styles/Home.css";
import "../styles/App.css";
import { connect } from "react-redux";
import Player from "../components/Player/Player";
import $ from "jquery";
import ShowList from "../components/ShowList/ShowList";
class Home extends Component {
  selectPlaySong = (idSong) => {
    this.props.selectPlaySong(idSong);
  };
  mapSong = () =>
    this.props.song.map((value, key) => {
      const tmp = value.name.split(".");
      return (
        <div
          className="playlist playlist--hover"
          key={key}
          onClick={(idSong) => this.selectPlaySong(value.id)}
        >
          <p className=" playlist__number">{value.id}</p>
          <p className=" playlist__title">{tmp[1]}</p>
          <p className=" playlist__artist">{tmp[0]}</p>
          <p className=" playlist__time">0</p>
        </div>
      );
    });

  render() {
    return (
        <ShowList title="Popular Song" list={this.mapSong()}></ShowList>
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
    selectPlaySong: (idSong) => {
      dispatch({
        type: "SELECT-PLAY-SONG",
        idSong,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
