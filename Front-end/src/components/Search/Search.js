import React, { Component } from "react";
import { connect } from "react-redux";
import $ from "jquery";
class Search extends Component {
    
  isChange = (e) => {
    if (e.target.value != "") {
      $(".infoSearhResult").addClass("active");
    } else {
      $(".infoSearhResult").removeClass("active");
    }
  };
  isClick = (e) => {
      console.log("object");
    if (e.target.value != "") {
      $(".infoSearhResult").addClass("active");
    } else {
      $(".infoSearhResult").removeClass("active");
    }
  };
  backPage=()=>{
      window.history.back();
  }
  forwardPage=()=>{
      window.history.forward();
  }
  render() {
    return (
      <div>
        <header>
          <nav className="main-content__header-nav">
            <i className="fas fa-bars bars-left"></i>
            <i className="fas fa-arrow-left" onClick={()=>{this.backPage()}}></i>
            <i className="fas fa-arrow-right"  onClick={()=>{this.forwardPage()}}></i>
          </nav>
          <div className="searhInfoInput">
            <div className="main-content__search-form">
              <i className="fas fa-search search-btn"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search for artist, songs....."
                onChange={(event) => {
                  this.isChange(event);
                }}
                onClick={(event) => {
                  this.isClick(event);
                }}
              />
            </div>
            <div className="infoSearhResult">
              <ul className="search">
                <ul className="songResult">
                  <div className="h5 p-2">
                    <u>Songs</u>
                  </div>
                  <li className="liInfoSearh">
                    <div className="imgSearch">
                      <img
                        src={require("../../data/BLACKPINK.LISA - 'MONEY' EXCLUSIVE PERFORMANCE VIDEO.webp")}
                        alt=""
                      />
                    </div>
                    <div className="infoSongSearch">
                      <div>
                        <span>
                          BLACKPINK.LISA - 'MONEY' EXCLUSIVE PERFORMANCE VIDEO
                        </span>
                      </div>
                      <span>BLACKPINK</span>
                    </div>
                  </li>
                  <li className="liInfoSearh">
                    <div className="imgSearch">
                      <img
                        src={require("../../data/SMTOWN.Red Velvet 레드벨벳 'Feel My Rhythm' MV.webp")}
                        alt=""
                      />
                    </div>
                    <div className="infoSongSearch">
                      <div>
                        <span>SMTOWN.Red Velvet 레드벨벳 'Feel My Rhythm</span>
                      </div>
                      <span>SMTOWN</span>
                    </div>
                  </li>
                </ul>
                <ul className="artResult">
                  <div className="h5 p-2">
                    <u>Artist</u>
                  </div>
                  <li className="liInfoSearh">
                    <div className="imgSearch">
                      <img src={require("../../images/min.jpg")} alt="" />
                    </div>
                    <div className="infoSongSearch">
                      <div>
                        <span>Min</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    song: state.song,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps)(Search);
