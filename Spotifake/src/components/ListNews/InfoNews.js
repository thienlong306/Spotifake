import React, { Component } from "react";

class InfoNews extends Component {

  render() {
    return (
      <div data-isolde-el={this.props.category}>
        <div className="card">
          <img
            className="card__picture"
            src={this.props.img}
            alt=""
          />
          <div className="card-infos">
            <h2 className="card__title">{this.props.title}</h2>
            <p className="card__text">
              {this.props.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoNews;
