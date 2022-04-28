import React, { Component } from "react";
import Search from "../components/Search/Search";
import '../styles/Realese.css'
class Realese extends Component {
  render() {
    return (
      <div id="main-content">
        <Search></Search>
        <div className="main-content__trend pt-2 pb-0">
          <div className="h2 pl-1">Realese Dates</div>
        </div>
        
      <div className="page-archive release-dates">
        <ul className="date-picker">
          <li className="dropdown">
            <label htmlFor="year">
              <i class="fas fa-angle-down iconRealese"></i>
              <select name="year" onchange="setUrl('year', this.value);" className="selectDate">
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
                <option value={2009}>2009</option>
                <option value={2010}>2010</option>
                <option value={2011}>2011</option>
                <option value={2012}>2012</option>
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option selected value={2022}>2022</option>
              </select>
            </label>
          </li>
          <li className="dropdown">
            <label htmlFor="month">
            <i class="fas fa-angle-down iconRealese"></i>
              <select name="month" onchange="setUrl('month', this.value);">
                <option value={1}>January</option>
                <option value={2}>February</option>
                <option value={3}>March</option>
                <option selected value={4}>April</option>
                <option value={5}>May</option>
                <option value={6}>June</option>
                <option value={7}>July</option>
                <option value={8}>August</option>
                <option value={9}>September</option>
                <option value={10}>October</option>
                <option value={11}>November</option>
                <option value={12}>December</option>
              </select>
            </label>
          </li>
        </ul>
        <div className="listRealese">
        <div className="release-feed">
          <p className="date">Mar 31</p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Bulletproof Soul<em>Pacman Da Gunman &amp; Hit-Boy</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Petestrumentals Vol. 4<em>Pete Rock</em></a>
          </p>
          <p className="date">Apr 1</p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Luh Geek Pack<em>Yeat</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              The Last Slimeto Sampler<em>YoungBoy Never Broke Again</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Confetti Nights<em>T Shyne</em></a>
          </p>
          <p className="album">
            <a href="/reviews/id.3854/title.dreamville-d-day-album-review">
              D-Day<em>Dreamville &amp; DJ Drama</em></a>
          </p>
          <p className="date">Apr 4</p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Misunderstood<em>B-Lovee</em></a>
          </p>
          <p className="date">Apr 8</p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              B.I.B.L.E.<em>Fivio Foreign</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              The Tornado Kidd<em>Spinabenz</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Ramona Park Broke My Heart (EXACT DATE TBA)<em>Vince Staples</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              <em /></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Sunset Visionary Vol. 2<em>Tom The Mail Man</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Broken Hearts Club<em>SYD</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              <em /></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              All B*llshit Aside<em>Gunplay</em></a>
          </p>
          <p className="album">
            <a href="/reviews/id.3853/title.est-gee-42-dugg-last-ones-left-album-review">
              Last Ones Left<em>42 Dugg &amp; EST GEE</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Jungle Life<em>DCG Brothers</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Full Court Press<em>Girl Talk, Wiz Khalifa, Big K.R.I.T. &amp; Smoke DZA</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Stardust<em>Yung Lean</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Trendsetter<em>Coi Leray</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Aethiopes<em>Billy Woods &amp; Preservation</em></a>
          </p>
          <p className="date">Apr 15</p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              [Bump] Pick Me Up<em>Bas</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Noughty By Nature<em>Digga D</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Paradise Again<em>Swedish House Mafia</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Two-Face Bang 2<em>Fredo Bang</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Half Tee Half Beast<em>Tee Grizzley</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Labrador bleu<em>ISHA</em></a>
          </p>
          <p className="date">Apr 16</p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Horroh Scope<em>Killah Priest</em></a>
          </p>
          <p className="date">Apr 20</p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Learn 2 Swim<em>redveil</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Goat<em>YNW BSlime</em></a>
          </p>
          <p className="date">Apr 21</p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              No Way Out<em>FNF Chop</em></a>
          </p>
          <p className="date">Apr 22</p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              From Trap 2 Rap<em>Bankroll Freddie</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Find My Way<em>HD4President</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Too Eazzyy<em>Lil Eazzyy</em></a>
          </p>
          <p className="date">Apr 29</p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              El Cocodrillo Turbo<em>Action Bronson</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              TBA<em>Future</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              Mr. Crawford<em>NoCap</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              A Love Letter To You 5 (EXACT DATE TBA)<em>Trippie Redd</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              MAHAL<em>Toro y Moi</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              blue water road<em>Kehlani</em></a>
          </p>
          <p className="album">
            <a href="#" onclick="event.preventDefault();">
              The Playlist<em>Steel Banglez</em></a>
          </p>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Realese;
