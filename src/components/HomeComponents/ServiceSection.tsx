import React from 'react'
import s1 from "./../../assets/img/s1.png.webp"
import s2 from "./../../assets/img/s2.png.webp"
import s3 from "./../../assets/img/s3.png.webp"

export const ServiceSection = () => {
    return (
        <section className="services_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main_title">
                            <p className="top_text">Our Service <span></span></p>
                            <h2>What Service We
                                Offer For You </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="service_item">
                            <img src={s1} alt="" />
                            <h4>Web Development</h4>
                            <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their
                                Fruit saw for
                                brought fish forth</p>
                            <a href="#" className="primary_btn2 mt-35">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="service_item">
                            <img src={s2} alt="" />
                            <h4>UX/UI Design</h4>
                            <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their
                                Fruit saw for
                                brought fish forth</p>
                            <a href="#" className="primary_btn2 mt-35">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="service_item">
                            <img src={s3} alt="" />
                            <h4>WP Developing</h4>
                            <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their
                                Fruit saw for
                                brought fish forth</p>
                            <a href="#" className="primary_btn2 mt-35">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
