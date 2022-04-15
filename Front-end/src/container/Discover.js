import React, { Component } from "react";
import "../styles/Home.css";
import "../styles/Discover.css";
import Player from "../components/Player/Player";
import ListChart from "../components/ListChart/ListChart";
import Search from "../components/Search/Search";

class Discover extends Component {
  render() {
    return (
      <div id="main-content">
        <Search></Search>
        <div className="my-playlist">
          <div className="playlist-head">
            <h4>Discover Tracks and Playlists</h4>
            {/* <a class="btn-hover">Show all</a> */}
          </div>
          <div className="list_discover">
          <ListChart
              title="Charts: New & hot"
              description="Up-and-coming tracks on SoundCloud"
              imgLink1="https://i1.sndcdn.com/artworks-cZzvlGFIC0N10Mmm-ypqPvQ-t500x500.jpg"
              imgName1="All music genres"
              imgLink2="https://i1.sndcdn.com/artworks-OX0tWyLI6GMbEfKe-I4vxGQ-t500x500.jpg"
              imgName2="Hip-hop & Rap"
              imgLink3="https://i1.sndcdn.com/artworks-LnyTulNPscnQrMHm-V2n0Vg-t500x500.jpg"
              imgName3="Electronic"
              imgLink4="https://i1.sndcdn.com/artworks-tY4xHCZlq5GH8nBj-mVcd1Q-t500x500.jpg"
              imgName4="Classical"
            ></ListChart>
            <ListChart
              title="Chill"
              description="Popular playlists from the SoundCloud community"
              imgLink1="https://i1.sndcdn.com/artworks-000388088421-5xl072-t500x500.jpg"
              imgName1="Chill | Lofi | Hip Hop"
              imgLink2="https://i1.sndcdn.com/artworks-000405464955-n4ge52-t500x500.jpg"
              imgName2="Morning Chillout"
              imgLink3="https://i1.sndcdn.com/artworks-000351201330-pwnlun-t500x500.jpg"
              imgName3="Jazz hip"
              imgLink4="https://i1.sndcdn.com/artworks-000497390646-w8kzyn-t500x500.jpg"
              imgName4="Never Chill Before"
            ></ListChart>
            <ListChart
              title="Study"
              description="Popular playlists from the SoundCloud community"
              imgLink1="https://i1.sndcdn.com/artworks-000075046140-457jdg-t500x500.jpg"
              imgName1="Piano Deep Concentration"
              imgLink2="https://i1.sndcdn.com/artworks-000147477275-my3dmh-t500x500.jpg"
              imgName2="Stella's Coffee House"
              imgLink3="https://i1.sndcdn.com/artworks-000208627636-q5rfpn-t500x500.jpg"
              imgName3="lofi 4 studying"
              imgLink4="https://i1.sndcdn.com/artworks-000151142988-rhq3r7-t500x500.jpg"
              imgName4="Ambient piano"
            ></ListChart>
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
