import React from 'react'
import homeRight from "./../../assets/img/home-right.png"
export const HomeBanner = () => {
    return (
        <section className="home_banner_area">
            <div className="banner_inner">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="banner_content">
                                <h3>Hey There !</h3>
                                <h1 className="text-uppercase">I am Jitendra</h1>
                                <h5 className="text-uppercase">Creative Web developer & mobile</h5>
                                <div className="social_icons my-5">
                                    <a href="#"><i className="ti-twitter"></i></a>
                                    <a href="#"><i className="ti-skype"></i></a>
                                    <a href="#"><i className="ti-instagram"></i></a>
                                    <a href="#"><i className="ti-dribbble"></i></a>
                                    <a href="#"><i className="ti-vimeo"></i></a>
                                </div>
                                <a className="primary_btn" href="#"><span>See My Work</span></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="home_right_img">
                                <img className="img-fluid" src={homeRight} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
