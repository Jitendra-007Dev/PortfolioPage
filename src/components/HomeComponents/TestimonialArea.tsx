import React from 'react'
import testimonial1 from "./../../assets/img/testimonial1.png.webp"

export const TestimonialArea = () => {
    return (
        <section className="testimonial_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main_title">
                            <p className="top_text">Our Tesitmonial <span></span></p>
                            <h2>Honourable Client Says
                                About Me </h2>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel owl-theme testimonial-slider ">
                    <div className="testimonial-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="testi-img mb-4 mb-lg-0">
                                    <img src={testimonial1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-right">
                                    <h4>Roser Henrique</h4>
                                    <p><small>Project Manager, Apple</small></p>
                                    <p>Waters can not replenish hath fly and be to brought isn't very days behold without
                                        land every above lights us fruitful wherein divide it him fowl moving may beginning
                                        subdue fly waters can't replenish hath fly and be to brought isn't very days behold
                                    </p>
                                    <ul className="star_rating mt-4">
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li className="disable"><span><i className="fas fa-star"></i></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="testi-img mb-4 mb-lg-0">
                                    <img src={testimonial1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-right">
                                    <h4>Roser Henrique</h4>
                                    <p><small>Project Manager, Apple</small></p>
                                    <p>Waters can not replenish hath fly and be to brought isn't very days behold without
                                        land every above lights us fruitful wherein divide it him fowl moving may beginning
                                        subdue fly waters can't replenish hath fly and be to brought isn't very days behold
                                    </p>
                                    <ul className="star_rating mt-3">
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li className="disable"><span><i className="fas fa-star"></i></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="testi-img mb-4 mb-lg-0">
                                    <img src={testimonial1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-right">
                                    <h4>Roser Henrique</h4>
                                    <p><small>Project Manager, Apple</small></p>
                                    <p>Waters can not replenish hath fly and be to brought isn't very days behold without
                                        land every above lights us fruitful wherein divide it him fowl moving may beginning
                                        subdue fly waters can't replenish hath fly and be to brought isn't very days behold
                                    </p>
                                    <ul className="star_rating mt-3">
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li><span><i className="fas fa-star"></i></span></li>
                                        <li className="disable"><span><i className="fas fa-star"></i></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
