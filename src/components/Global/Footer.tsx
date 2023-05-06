import React from 'react'
import Logo from "./../../assets/img/logo.png.webp"
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="footer_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="footer_top flex-column">
                            <div className="footer_logo">
                                <a href="#">
                                    <img src={Logo} alt="" />
                                </a>
                                <div className="d-lg-block d-none">
                                    <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                                        <div className="collapse navbar-collapse offset">
                                            <ul className="nav navbar-nav menu_nav mx-auto">
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white"
                                                        to="/"
                                                    >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white"
                                                        to="/about">About
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white"
                                                        to="/portfolio">Portfolio
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white"
                                                        to="/blog">BLog
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link text-white"
                                                        to="/services">Services
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="footer_social mt-lg-0 mt-4">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-skype"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer_bottom justify-content-center">
                    <p className="col-lg-8 col-sm-12 footer-text">
                        {/* Copyright &copy; */}
                        Made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://www.linkedin.com/in/jitendra-maurya-1623771a4/"
                            target="_blank">Jackson Jitendra</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
