import React, { Component } from "react";
import Search from "../components/Search/Search";
import '../styles/Event.css'
class Event extends Component {
    render() {
        return (
            <div id="main-content">
                <Search></Search>
                <div className="main-content__trend pt-2 pb-0">
                    {/* <div className="h2 pl-1">Best Event</div> */}
                </div>
                <div className="infoEvent">
                    <section className="banner" role="banner" id="banner">
                        {/* banner text */}
                        <div className="container">
                            <div className="col-md-10">
                                <div className="banner-text text-center">
                                    <h1>Musical Event</h1>
                                    <p>Live rocking music</p>
                                    <div className="countdown styled" />
                                </div>
                                {/* banner text */}
                            </div>
                        </div>
                    </section>

                    <section id="intro" className="section intro">
                        <div className="container boxIntro">
                            <div className="col-md-10 col-md-offset-2 text-center">
                                <h3>Don't Miss This Event</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus
                                    eget quis lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.</p>
                                <a href="#events" className="btn btn-dark mt-2">Events</a>
                            </div>
                        </div>
                    </section>

                    <section id="services" className="services service-section">
                        <div className="container">
                            <div className="section-header">
                                <h2 className="wow fadeInDown animated">News &amp; Updates</h2>
                                <p className="wow fadeInDown animated">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus
                                    vitae massa <br /> semper aliquam quis mattis quam.</p>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6 services text-center"> <i className="fa fa-recycle icon" aria-hidden="true"></i>
                                    <div className="services-content">
                                        <h5>Musical Night</h5>
                                        <b>Day 1</b>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis
                                            faucibus eget quis lacus.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 services text-center"> <i className="fa fa-heart icon" aria-hidden="true"></i>
                                    <div className="services-content">
                                        <h5>Dancing Night</h5>
                                        <b>Day 2</b>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis
                                            faucibus eget quis lacus.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 services text-center"> <i class='bi bi-megaphone icon'></i>
                                    <div className="services-content">
                                        <h5>Food Night</h5>
                                        <b>Day 3</b>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis
                                            faucibus eget quis lacus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Event;
