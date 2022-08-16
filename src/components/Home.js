import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="dark-text">
        <div id="bannerimage">
            <div className="col-md-5 p-lg-5 headline">
                <h1 className="slogan">
                    <h6>OUR MISSION:</h6>
                    CREATE GROUNDBRAKING INNOVATION AND START INSPIRE PEOPLE.
                </h1>
                <p className="slogan">"DON'T HESITATE, JUST START."</p>
            </div>
        </div>

        <div className="jumbotron bg-transparent mt-5 container text-center">
            <h1 className="display-4">Recent News</h1>
            <p className="lead">All the latest news regarding UI Motorsport.</p>
            <hr className="my-4" />
            <Link className="btn btn-primary btn-lg" to="/news" role="button">Click Here!</Link>
        </div>

        <div id="about" className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-2 py-3">
                    <h2 className="display-3">ABOUT US</h2>
                    <p className="lead my-3">
                        We are motorsport team that was founded by Universitas Indonesia students
                        who are interest, talented, and innovative in automotive sector, especially in
                        karts, electric motorcycle, and motorsports.
                    </p>
                    <p className="lead">
                        Our mission is what drives us to inspire students who interest and have potential in
                        automotive by creating groundbreaking innovation, by create an inclusive environment
                        and making positive impact in the world of motorsport.
                    </p>
                    <Link className="btn btn-primary btn-lg" to="/news" role="button">Read More</Link>
                </div>
            </div>
            <div id="about-us" className="my-3 py-3 mr-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden img-fluid mx-auto"></div>
        </div>

        <div id="socials" className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <h2 className="display-4">OFFICIAL ACCOUNTS</h2>
                <p className="lead">
                Our official social media accounts will be used to let you know about open recuitments, events, races, and more.
                </p>
                <div class="wrapper bg-transparent">
                    <a href="https://www.linkedin.com/company/uimotorsport/" class="icon linkedin">
                        <div class="tooltip">LinkedIn</div>
                        <span><i class="fab fa-linkedin"></i></span>
                    </a>
                    <a href="https://www.instagram.com/uimotorsport/" class="icon instagram">
                        <div class="tooltip">Instagram</div>
                        <span><i class="fab fa-instagram"></i></span>
                    </a>
                    <a href="https://www.tiktok.com/@uimotorsport" class="icon tiktok">
                        <div class="tooltip">Tiktok</div>
                        <span><i class="fab fa-tiktok"></i></span>
                    </a>
                    <a href="/#" class="icon youtube">
                        <div class="tooltip">Youtube</div>
                        <span><i class="fab fa-youtube"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Home;