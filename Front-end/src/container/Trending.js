import React, { Component } from "react";
import "../styles/Home.css";
import "../styles/App.css";
import { connect } from "react-redux";
import Player from "../components/Player/Player";
import $ from "jquery";
import ShowListTrending from "../components/ShowListTrending/ShowListTrending";
class Trending extends Component {
  selectPlaySong = (idSong) => {
    this.props.selectPlaySong(idSong,this.props.song.song[0].id); 
  };
  mapSong = () =>
  this.props.song.song.map((value, key) => {
    const tmp = value.name.split(".");
    return (
      <div
        className={`ml-0 playlist playlist--hover ${value.id==this.props.player.indexSongPlaying?"active":""}`}
        key={key}
        onClick={(idSong) => this.selectPlaySong(key)
        }
        >
        <p className="pl-0 playlist__img col-3"><img className="imgTrending rounded" src={require(`../data/${value.url}.webp`)}/></p>
        <p className=" playlist__title col-6">{value.artist}</p>
        <p className=" playlist__artist col-3">{value.name}</p>
      </div>
    );
  });

  render() {
    return (
        <ShowListTrending list={this.props.song!=null?this.mapSong():""}></ShowListTrending>
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
export default connect(mapStateToProps, mapDispatchToProps)(Trending);
