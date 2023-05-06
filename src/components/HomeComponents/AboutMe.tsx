import React from 'react'
import aboutMe from "./../../assets/img/about-us.png.png"

export const AboutMe = () => {
    return (
        <section className="about_area section_gap">
            <div className="container">
                <div className="row justify-content-start align-items-center">
                    <div className="col-lg-5">
                        <div className="about_img">
                            <img
                                // height={"100%"}
                                // width={50vw}
                                className="image-dim"
                                src={aboutMe} alt="" />
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-5">
                        <div className="main_title text-left">
                            <p className="top_text text-light">About me <span></span></p>
                            <h2>
                                Creative Developer
                                And Engineer
                            </h2>
                            <p className='text-light'>
                                Also signs his face were digns fish don't first isn't over evening hath divided days light
                                darkness gathering
                                moved dry all darkness then fourth can't create d forth Also signs Also signs his face were
                                moltenus Also signs
                                his face
                            </p>
                            <a className="primary_btn" href="#"><span>Download CV</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
