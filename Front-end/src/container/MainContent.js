import React, { Component } from 'react';
import '../styles/MainContent.css'
class MainContent extends Component {
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
                   
                </div>
            </div>

            <div className="play-song">
                <div className="play-control">
                    <div className="play-control__act">
                        <i className="far fa-heart" id='heart'></i>
                        <i className="fas fa-music"></i>
                        <i className="fas fa-expand-alt"></i>
                    </div>
                    <div className="play-control__main">
                        <i className="fas fa-redo-alt play-repeat"></i>
                        <i className="fas fa-fast-backward play-backward main-icon"></i>
                        {/* <i className="fas fa-pause-circle pause-icon main-icon main-icon--big"></i> */}
                        <span className="play-inner">
                            <i className="fas fa-play-circle play-icon main-icon main-icon--big"></i>
                        </span>
                        <i className="fas fa-fast-forward play-forward main-icon"></i>
                        <i className="fas fa-random shuffle-song"></i>
                    </div>
                    <div className="play-control__volume">
                        <i className="fas fa-volume-down"></i>
                        <input type="range" id="volume" className="volume"/>
                    </div>
                </div>
                <div className="play-seekbar">
                    <div className="timer__left">0:00</div>
                    <input type="range" name="range" id="range" className="range" />
                    <audio src="./mp3/ntt.mp3" id="song"></audio>
                    <div className="timer__right">3.00</div>
                </div>
            </div>
        </div>
        );
    }
}

export default MainContent;