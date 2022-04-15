import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../Search/Search";
class ShowListTrending extends Component {
  componentDidMount() {
    if (this.props.song.playlist == null) {
      this.props.changeListTrending("POP");
    } else this.props.changeListTrending(this.props.song.playlist);
  }
  isChange = (event) => {
    this.props.changeListTrending(event.target.value);
  };
  render() {
    return (
      <div id="main-content">

        <Search></Search>
        <div>
          <div className="main-content__trend pt-2 pb-0">
            <div className="h2 pl-1">Trending</div>
            {/* <div className="main-content__trend-more btn-hover">
              More
              <span>
                <i className="fas fa-chevron-right" />
              </span>
            </div> */}
          </div>
        </div>
        <div className="my-playlist">
          <div className="playlist-head pt-1">
            <h4>
              <div
                className="select is-medium"
                onChange={(event) => {
                  this.isChange(event);
                }}
              >
                <select defaultValue={this.props.song.playlist}>
                  <option value={"POP"}>Popular Song</option>
                  <option value={"K-POP"}>Popular Korean songs</option>
                  <option value={"V-POP"}>Popular Vietnamese songs</option>
                </select>
              </div>
            </h4>
            {/* <a className="btn-hover">Show all</a> */}
          </div>
          <div className="playlist playlist-list__title pt-3 ml-0">
            <p className="p-1 col-3 h5">Thumbail</p>
            <p className="col-6">TITLE</p>
            <p className="col-3">ARTIST</p>
          </div>
          <div className="box_list" style={{height:"75%"}}>
            <div className="playlist-list">{this.props.list}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    song: state.song,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeListTrending: (playlist) => {
      dispatch({
        type: "CHANGE-LIST-TRENDING",
        playlist,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowListTrending);
