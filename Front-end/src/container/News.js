import React, { Component } from "react";
import ListNews from "../components/ListNews/ListNews";
import Search from "../components/Search/Search";
import "../styles/News.css";

class News extends Component {
  render() {
    return (
      <div id="main-content">
        <Search></Search>
          <div className="main-content__trend pt-2 pb-0">
            <div className="h2 pl-1">News</div>
          </div>
        <div className="news">
          <div className="menuNews">
            <ul className="sortable__nav nav">
              <li>
                <a data-isolde-link="all" className="nav__link">
                  All
                </a>
              </li>
              <li>
                <a data-isolde-link="song" className="nav__link">
                  Songs
                </a>
              </li>
              <li>
                <a data-isolde-link="artist" className="nav__link">
                  Artists
                </a>
              </li>
            </ul>
          </div>
          <ListNews></ListNews>
        </div>
      </div>
    );
  }
}

export default News;
