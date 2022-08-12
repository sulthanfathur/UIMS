import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <div id="bannerimage">
            <div className="col-md-5 p-lg-5">
                <h1 className="display-4 font-weight-normal slogan">Don't Hesitate, Just Start.</h1>
                <p className="lead font-weight-normal slogan">Universitas Indonesia Motorsport</p>
            </div>
        </div>

        <div className="jumbotron mt-5 container text-center">
            <h1 className="display-4">Recent News</h1>
            <p className="lead">All the latest news regarding our UKM.</p>
            <hr className="my-4" />
            <Link className="btn btn-primary btn-lg" to="/news" role="button">Click Here!</Link>
        </div>

        <div id="about" className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-2 py-3">
                    <h2 className="display-3">ABOUT US</h2>
                    <p className="lead my-5">
                        UI Motorsport is a Unit Kegiatan Mahasiswa (UKM) from
                        University of Indonesia which have interests and talents on
                        the automotive sector, especially motorsports.
                    </p>
                    <p className="lead">
                        UI Motorsport is also used as a catalyst for the team to
                        develop their character and apply their knowledge and skills 
                        in engineering to real life.
                    </p>
                </div>
            </div>
            <div id="about-us" className="my-3 py-3 mr-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden img-fluid mx-auto"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div id="visi-misi" className="my-3 py-3 mr-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden img-fluid mx-auto"></div>
            <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div>
                    <h2 className="display-4">OUR VISION AND MISSION</h2>
                    <h4>Visi</h4>
                    <p className="lead">
                        Menjadikan UIMS sebagai wadah mahasiswa Universitas Indonesia yang mampu mengembangkan
                        pengetahuan secara ilmu maupun praktik dalam bidang motorsport agar mampu bersaing diranah
                        nasional maupun internasional
                    </p>
                    <h4>Misi</h4>
                    <p className="lead">
                        UI Motorsport is also used as a catalyst for the team to
                        develop their character and apply their knowledge and skills 
                        in engineering to real life.
                    </p>
                </div>
            </div>
        </div>

        <div id="socials" className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <h2 className="display-4">OFFICIAL ACCOUNTS</h2>
                <p className="lead">
                Our official social media accounts will be used to let you know about open recuitments, events, races, and more.
                </p>
                <div class="wrapper">
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