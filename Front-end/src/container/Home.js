import React, { Component } from 'react';
import '../styles/Home.css'
import '../styles/App.css'
import { connect } from 'react-redux';
import Player from '../components/Player/Player';
import $ from 'jquery';
class Home extends Component {
    selectPlaySong=(idSong)=>{
        this.props.selectPlaySong(idSong);
    }
    pauseSong=()=>{
        
    }
    mapSong=()=>
        this.props.song.map((value,key)=>{
            const list_music = value.name.split(".");
            return (        
                <div className="playlist playlist--hover" key={key} onClick={(idSong)=>this.selectPlaySong(value.id)}>
                    <p className=" playlist__number">{value.id}</p>
                    <p className=" playlist__title">{list_music[1]}</p>
                    <p className=" playlist__artist">{list_music[0]}</p>
                    <p className=" playlist__time">{list_music[2]}</p>
                </div>  )

        });
    
    render() {
        
        return (
            <div id="main-content" >
            <header>
                <nav className="main-content__header-nav">
                    <i className="fas fa-bars bars-left"></i>
                    {/* <i className="fas fa-arrow-left"></i>
                    <i className="fas fa-arrow-right"></i> */}
                </nav>
                <div className="main-content__search-form">
                    <i className="fas fa-search search-btn"></i>
                    <input type="text" className="search-input" placeholder="Search for artist, songs....."/>
                </div>
                <i className="fas fa-bars bars-right"></i>
            </header>
            <div className="my-playlist">
                <div className="playlist-head">
                    <h4>Popular songs</h4>
                    {/* <a className="btn-hover">Show all</a> */}
                </div>
                <div className="playlist playlist-list__title">
                    <p className="playlist__number">#</p>
                    <p className="playlist__title">TITLE</p>
                    <p className="playlist__artist">ARTIST</p>
                    <p className="playlist__time">TIME</p>
                </div>
                <div className="playlist-list">
                    {this.mapSong()}
                </div>
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        song: state.song,
        player:state.player
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectPlaySong: (idSong) => {
            dispatch({
                type:"SELECT-PLAY-SONG",
                idSong
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);