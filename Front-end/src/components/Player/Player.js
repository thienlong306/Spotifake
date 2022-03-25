import React, { Component } from 'react';
import { connect } from 'react-redux';
class Player extends Component {
    
    render() {
        return (
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
                    <audio autoPlay crossOrigin="anonymous" src={this.props.songURL} id="song"></audio>
                    <div className="timer__right">3.00</div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        songURL: state.play
    }
}
export default connect(mapStateToProps,)(Player)