import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [featuredNews, setFeaturedNews] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/news/featured`);
                setFeaturedNews(res.data[0]);
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    return (
    <div className="dark-text">
        <div id="bannerimage">
            <div className="col-md-5 p-lg-5 headline">
                <h1 className="slogan text-break">
                    <h6>OUR MISSION:</h6>
                    CREATE GROUNDBRAKING INNOVATION AND START INSPIRE PEOPLE.
                </h1>
                <p className="slogan">"DON'T HESITATE, JUST START."</p>
            </div>
        </div>

        {/* <div className="row bg-darkgrey d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="col mt-2 m-5 flex-column position-static">
                <p className='slogan mb-0 mt-2'>featured news</p>
                <h3 className="display-4">{featuredNews.title}</h3>
                <p className="lead my-3">{featuredNews.excerpt}</p>
                <hr/>
                <Link to={`/news/${featuredNews.slug}`} className="btn btn-primary btn-lg">Read</Link>
            </div>
            <img className="" width='420' height='360' src={featuredNews.thumbnail} alt='thumbnail' />
        </div> */}

        <div className="bg-darkgrey row flex-md-equal w-100 ml-0 md-3">
            <div className="m-3 p-3 mr-5">
                <div className="ml-5 flex-column position-static">
                    <h3 className='slogan mb-3 4 mt-4'>featured news</h3>
                    <h5 className="text-muted mb-0">{featuredNews.month} {featuredNews.day}</h5>
                    <h4 className="text-break mt-0">{featuredNews.title}</h4>
                    <hr/>
                    <Link to={`/news/${featuredNews.slug}`} className="btn btn-primary btn-lg">Read</Link>
                </div>
            </div>
            <img className="p-3 overflow-hidden mx-auto" height="280" src={featuredNews.thumbnail} alt='thumbnail' />
        </div>

        <div id="about" className="container d-md-flex flex-md-equal w-100 my-md-5 pl-md-3">
            <div className="m-3 p-3 mr-5 text-center overflow-hidden">
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
                <a className="btn btn-primary btn-lg" href="/about#" onclick="return redirectMe(this);">Read More</a>
            </div>
            <div id="about-us" className="m-3 p-3 overflow-hidden mx-auto"></div>
        </div>

        <hr width="80%"/>

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
    )


};

export default Home;