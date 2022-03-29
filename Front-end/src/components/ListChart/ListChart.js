import React, { Component } from "react";

class ListChart extends Component {
  render() {
    return (
      <div className="item_discover">
        <div className="dicover_title">
          <h2>Charts: Top 50</h2>
          <span>The most played tracks on SoundCloud this week</span>
        </div>
        <div className="container">
          <div className="row blog">
            <div className="col-md-12">
              <div
                id="blogCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    className="prevSlide"
                    data-target="#blogCarousel"
                    data-slide-to={0}
                  />
                  <li
                    className="nextSlide"
                    data-target="#blogCarousel"
                    data-slide-to={1}
                  />
                </ol>
                {/* Carousel items */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                          <span>Folk &amp; Singer-Songwriter</span>
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                          <span>Folk &amp; Singer-Songwriter</span>
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                          <span>Folk &amp; Singer-Songwriter</span>
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
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
                          <img
                            src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                          <span>Folk &amp; Singer-Songwriter</span>
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                          <span>Folk &amp; Singer-Songwriter</span>
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                          <span>Folk &amp; Singer-Songwriter</span>
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img
                            src="https://i1.sndcdn.com/artworks-000224726346-id9j8i-t500x500.jpg"
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
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
    );
  }
}

export default ListChart;
