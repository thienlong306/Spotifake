import React, { Component } from "react";
import $ from "jquery";
import isolde from "./isolde";
import InfoNews from "./InfoNews";

class ListNews extends Component {
  componentDidMount() {
    setTimeout(() => {
      const ijst = new isolde();
      ijst.orderelements();
    }, 50);
  }
  render() {
    return (
      <div className="listNews">
        <div id="isolde" className="isolde-default">
          <InfoNews
            category="song"
            img="https://www.nme.com/wp-content/uploads/2022/04/Lorde-Julian-Casablancas-400x254.jpeg"
            title="Watch Lorde cover The Strokes"
            description="After covering Rosalía's 'Hentai' earlier this week, the New Zealand singer has followed it up with an homage to the NYC indie rockers"
          ></InfoNews>

        <InfoNews
            category="artist"
            img="https://www.nme.com/wp-content/uploads/2022/04/Rush-Geddy-Lee-400x254.jpg"
            title="Watch Lorde cover The Strokes"
            description="But they've said it was all in the name of remaining loyal to their late friend and bandmate"
          ></InfoNews>
        <InfoNews
            category="artist"
            img="https://www.nme.com/wp-content/uploads/2022/04/Kaytranada-UK-show-400x254.jpg"
            title="Kaytranada announces headline summer London show"
            description="The two-time Grammy winner will head to Europe in June for a run of shows"
          ></InfoNews>
        <InfoNews
            category="song"
            img="https://www.nme.com/wp-content/uploads/2022/04/2022_viagraboys_press_2000x1270-400x254.jpg"
            title="Viagra Boys announce new album ‘Cave World’"
            description="The two-time Grammy winner will head to Europe in June for a run of shows"
          ></InfoNews>
          <InfoNews
            category="artist"
            img="https://www.nme.com/wp-content/uploads/2022/04/2022_asaprocky_getty_2000x1270-400x254.jpg"
            title="A$AP Rocky arrested in connection with shooting in 2021"
            description="It comes almost three years after he was found guilty of assault and handed a suspended sentence for a separate case in Sweden"
          ></InfoNews>
        </div>
      </div>
    );
  }
}

export default ListNews;
