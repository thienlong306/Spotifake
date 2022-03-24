import React, { Component } from "react";
import '../styles/MainContent.css';
import '../styles/Discover.css';

class Discover extends Component {
  render() {
    return (
       
      <div id="main-content">
      <header>
        <nav className="main-content__header-nav">
          <i className="fas fa-bars bars-left" />
          {/* <i class="fas fa-arrow-left"></i>
                      <i class="fas fa-arrow-right"></i> */}
        </nav>
        <div className="main-content__search-form">
          <i className="fas fa-search search-btn" />
          <input type="text" className="search-input" placeholder="Search for artist, songs....." />
        </div>
        <i className="fas fa-bars bars-right" />
      </header>
      <div className="my-playlist">
        <div className="playlist-head">
          <h4>Discover Tracks and Playlists</h4>
          {/* <a class="btn-hover">Show all</a> */}
        </div>
        <div className="list_discover">
          <div className="item_discover">
            <div className="dicover_title">
              <h2>Charts: Top 50</h2>
              <span>The most played tracks on SoundCloud this week</span>
            </div>
            <div className="container">
              <div className="row blog">
                <div className="col-md-12">
                  <div id="blogCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li className="prevSlide" data-target="#blogCarousel" data-slide-to={0} />
                      <li className="nextSlide" data-target="#blogCarousel" data-slide-to={1} />
                    </ol>
                    {/* Carousel items */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                        </div>
                        {/*.row*/}
                      </div>
                      {/*.item*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                        </div>
                        {/*.row*/}
                      </div>
                      {/*.item*/}
                    </div>
                    {/*.carousel-inner*/}
                  </div>
                  {/*.Carousel*/}
                </div>
              </div>
            </div>
          </div>
          <div className="item_discover">
            <div className="dicover_title">
              <h2>Charts: Top 50</h2>
              <span>The most played tracks on SoundCloud this week</span>
            </div>
            <div className="container">
              <div className="row blog">
                <div className="col-md-12">
                  <div id="blogCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li className="prevSlide" data-target="#blogCarousel" data-slide-to={0} />
                      <li className="nextSlide" data-target="#blogCarousel" data-slide-to={1} />
                    </ol>
                    {/* Carousel items */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                        </div>
                        {/*.row*/}
                      </div>
                      {/*.item*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                        </div>
                        {/*.row*/}
                      </div>
                      {/*.item*/}
                    </div>
                    {/*.carousel-inner*/}
                  </div>
                  {/*.Carousel*/}
                </div>
              </div>
            </div>
          </div>
          <div className="item_discover">
            <div className="dicover_title">
              <h2>Charts: Top 50</h2>
              <span>The most played tracks on SoundCloud this week</span>
            </div>
            <div className="container">
              <div className="row blog">
                <div className="col-md-12">
                  <div id="blogCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li className="prevSlide" data-target="#blogCarousel" data-slide-to={0} />
                      <li className="nextSlide" data-target="#blogCarousel" data-slide-to={1} />
                    </ol>
                    {/* Carousel items */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                        </div>
                        {/*.row*/}
                      </div>
                      {/*.item*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a href="#">
                              <img src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg" alt="Image" style={{maxWidth: '100%'}} />
                              <span>Folk &amp; Singer-Songwriter</span>
                            </a>
                          </div>
                        </div>
                        {/*.row*/}
                      </div>
                      {/*.item*/}
                    </div>
                    {/*.carousel-inner*/}
                  </div>
                  {/*.Carousel*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="play-song">
        <div className="play-control">
          <div className="play-control__act">
            <i className="far fa-heart" id="heart" />
            <i className="fas fa-music" />
            <i className="fas fa-expand-alt" />
          </div>
          <div className="play-control__main">
            <i className="fas fa-redo-alt play-repeat" />
            <i className="fas fa-fast-backward play-backward main-icon" />
            {/* <i class="fas fa-pause-circle pause-icon main-icon main-icon--big"></i> */}
            <span className="play-inner">
              <i className="fas fa-play-circle play-icon main-icon main-icon--big" />
            </span>
            <i className="fas fa-fast-forward play-forward main-icon" />
            <i className="fas fa-random shuffle-song" />
          </div>
          <div className="play-control__volume">
            <i className="fas fa-volume-down" />
            <input type="range" id="volume" className="volume" />
          </div>
        </div>
        <div className="play-seekbar">
          <div className="timer__left">0:00</div>
          <input type="range" name="range" id="range" className="range" />
          <audio src="../mp3/ntt.mp3" id="song" />
          <div className="timer__right">3.00</div>
        </div>
      </div>
    </div>
    );
  }
}

export default Discover;
