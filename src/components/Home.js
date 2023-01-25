import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [featuredNews, setFeaturedNews] = useState([]);
    const [homepageBanner, setHomepageBanner] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const featured = await axios.get(`${process.env.REACT_APP_API_URL}/api/homepage/news/featured`);
                const banner = await axios.get(`${process.env.REACT_APP_API_URL}/api/homepage/`);
                setFeaturedNews(featured.data[0]);
                setHomepageBanner(banner.data[0]);
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    return (
    <div className="dark-text"> 
        <div className="banner" style={{ backgroundImage: `url(${homepageBanner.image})`}}>
            <div className="col-md-5 p-lg-5 headline">
                <h1 className="slogan akira">
                    <h6 className="our-mission">OUR MISSION:</h6>
                    CREATE GROUNDBREAKING INNOVATION AND START INSPIRE PEOPLE.
                </h1>
                <p className="dont-hesitate akira">"DON'T HESITATE, JUST START."</p>
            </div>
        </div>

        <div className="bg-darkgrey row flex-md-equal w-100 ml-0 md-3">
            <div className="m-3 p-3 mr-5">
                <div className="ml-5 flex-column position-static">
                    <h3 className='akira mb-3 4 mt-4'>featured news</h3>
                    <h5 className="text-muted mb-0">{featuredNews.month} {featuredNews.day}</h5>
                    <h4 className="text-break mt-0">{featuredNews.title}</h4>
                    <hr/>
                    <Link to={`/news/${featuredNews.slug}`} className="btn btn-primary btn-lg">Read</Link>
                    <Link to={`/news`} className="btn btn-outline-light btn-lg ml-3">More News</Link>
                </div>
            </div>
            <img className="p-3 overflow-hidden mx-auto" height="280" src={featuredNews.thumbnail} alt='thumbnail' />
        </div>

        <div id="about" className="container d-md-flex flex-md-equal w-100 my-md-5 pl-md-3">
            <div className="m-3 p-3  text-center overflow-hidden">
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
                <Link to="/about" className="btn btn-primary btn-lg">Read More</Link>
            </div>
            <div id="about-us" className="m-3 p-3 overflow-hidden mx-auto"></div>
        </div>

        <a href={`team`} class="text-light splitbanner_wrapper team_image-properties home_team_img">
            <div class="gokart_ev_banner_item">
                <div class="splitbanner_content-transparent">
                    <div class="splitbanner_content-inside">
                        <h2 class="akira">MEET OUR TEAM</h2>
                        <br></br>
                        <a href={`team`} class="text-light btn btn-outline-light btn">DISCOVER MORE</a>
                    </div>
                </div>
                <div class="splitbanner_content-media">
                </div>
            </div>
        </a>
    </div>        
    )
};

export default Home;