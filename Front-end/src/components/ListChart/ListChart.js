import React, { Component } from "react";

class ListChart extends Component {
  render() {
    return (
      <div className="item_discover">
        <div className="dicover_title">
          <h1 className="titleChart">{this.props.title}</h1>
          <span className="descriptionChart">{this.props.description}</span>
        </div>
        <div className="container pl-0 pt-2">
          <div className="row blog">
            <div className="col-md-12 ">
              <div
                id="blogCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* <ol className="carousel-indicators">
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
                </ol> */}
                {/* Carousel items */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-3">
                        <a href="#"> <div className="boxImg">
                          <img className="imgDiscover"
                            src={this.props.imgLink1}
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                        </div><span className="titleImg">{this.props.imgName1}</span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="#"> <div className="boxImg">
                          <img className="imgDiscover"
                            src={this.props.imgLink2}
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                        </div><span className="titleImg">{this.props.imgName2}</span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="#"> <div className="boxImg">
                          <img className="imgDiscover"
                            src={this.props.imgLink3}
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                        </div><span className="titleImg">{this.props.imgName3}</span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="#"> <div className="boxImg">
                          <img className="imgDiscover"
                            src={this.props.imgLink4}
                            alt="Image"
                            style={{ maxWidth: "100%" }}
                          />
                        </div><span className="titleImg">{this.props.imgName4}</span>
                        </a>
                      </div>
                    </div>
                    {/*.row*/}
                  </div>
                  {/*.item*/}
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
