import React from 'react'
import PictureOne from "./../../assets/img/p1.jpg.webp"
import PicturerTwo from "./../../assets/img/p2.jpg.webp"
import PicturerThree from "./../../assets/img/p3.jpg.webp"
import PicturFour from "./../../assets/img/p4.jpg.webp"
import PicturFive from "./../../assets/img/p5.jpg.webp"
import PicturSix from "./../../assets/img/p6.jpg.webp"

export const Portfolio = () => {
    return (
        <section className="portfolio_area" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main_title">
                            <p className="top_text">Our Portfolio <span></span></p>
                            <h2>Check Our Recent
                                Client Work </h2>
                        </div>
                    </div>
                </div>
                <div className="filters portfolio-filter">
                    <ul>
                        <li className="active" data-filter="*">all</li>
                        <li data-filter=".popular">popular</li>
                        <li data-filter=".latest"> latest</li>
                        <li data-filter=".following">following</li>
                        <li data-filter=".upcoming">upcoming</li>
                    </ul>
                </div>
                <div className="filters-content">
                    <div className="row portfolio-grid">
                        {/* <div className="grid-sizer col-md-3 col-lg-3"></div>
                        <div className="col-lg-6 col-md-6 all following">
                            <div className="single_portfolio">
                                <img className="img-fluid w-100" src={PictureOne} alt="" />
                                <div className="overlay"></div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">Lens Mockup Design</a></h4>
                                    <p>Art, Illustration</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-6 col-md-6 all latest popular upcoming">
                            <div className="single_portfolio">
                                <img className="img-fluid w-100" src={PicturFour} alt="" />
                                <div className="overlay"></div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">Lens Mockup Design</a></h4>
                                    <p>Art, Illustration</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 all latest following">
                            <div className="single_portfolio">
                                <img className="img-fluid w-100" src={PicturerTwo} alt="" />
                                <div className="overlay"></div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">Lens Mockup Design</a></h4>
                                    <p>Art, Illustration</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 all latest upcoming">
                            <div className="single_portfolio">
                                <img className="img-fluid w-100" src={PicturerThree} alt="" />
                                <div className="overlay"></div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">Lens Mockup Design</a></h4>
                                    <p>Art, Illustration</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 all popular">
                            <div className="single_portfolio">
                                <img className="img-fluid w-100" src={PicturSix} alt="" />
                                <div className="overlay"></div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">Lens Mockup Design</a></h4>
                                    <p>Art, Illustration</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 all popular latest following">
                            <div className="single_portfolio">
                                <img className="img-fluid w-100" src={PicturFive} alt="" />
                                <div className="overlay"></div>
                                <div className="short_info">
                                    <h4><a href="portfolio-details.html">Lens Mockup Design</a></h4>
                                    <p>Art, Illustration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
