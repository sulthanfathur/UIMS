import React from "react";
import axios from "axios";
import Link from "next/link";

const Home = ({ featuredNews, homepageBanner }) => {
  return (
    <div className="dark-text">
      <div
        className="banner"
        style={{ backgroundImage: `url(${homepageBanner.image})` }}
      >
        <div className="col-md-5 p-lg-5 headline">
          <h6 className="our-mission">OUR MISSION:</h6>
          <h1 className="slogan akira">
            CREATE GROUNDBREAKING INNOVATION AND START INSPIRE PEOPLE.
          </h1>
          <p className="dont-hesitate akira">"DON'T HESITATE, JUST START."</p>
        </div>
      </div>

      <div className="bg-darkgrey row flex-md-equal w-100 ml-0 md-3">
        <div className="m-3 p-3 mr-5">
          <div className="ml-5 flex-column position-static">
            <h3 className="akira mb-3 4 mt-4">featured news</h3>
            <h5 className="text-muted mb-0">
              {featuredNews.month} {featuredNews.day}
            </h5>
            <h4 className="text-break mt-0">{featuredNews.title}</h4>
            <hr />
            <Link
              href={`/news/${featuredNews.slug}`}
              className="btn btn-primary btn-lg"
            >
              Read
            </Link>
            <Link href={`/news`} className="btn btn-outline-light btn-lg ml-3">
              More News
            </Link>
          </div>
        </div>
        <img
          className="p-3 overflow-hidden mx-auto"
          height="280"
          src={featuredNews.thumbnail}
          alt="thumbnail"
        />
      </div>

      <Link
        href="/about"
        id="about"
        className="container d-md-flex flex-md-equal w-100 my-md-5 pl-md-3"
      >
        <div className="flex text-center align-self-center">
          <h2 className="display-3 light-text">ABOUT US</h2>
          <span className="text-light btn btn-outline-light btn my-4">
            Read More
          </span>
        </div>
        <div id="about-us" className="m-3 p-3 overflow-hidden mx-auto"></div>
      </Link>

      <a
        href={`team`}
        className="text-light splitbanner_wrapper team_image-properties home_team_img"
      >
        <div className="gokart_ev_banner_item">
          <div className="splitbanner_content-transparent">
            <div className="splitbanner_content-inside">
              <h2 className="akira">MEET OUR TEAM</h2>
              <br></br>
              <span className="text-light btn btn-outline-light btn">
                DISCOVER MORE
              </span>
            </div>
          </div>
          <div className="splitbanner_content-media"></div>
        </div>
      </a>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const featured = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/homepage/news/featured`
    );
    const banner = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/homepage/`
    );
    return {
      props: {
        featuredNews: featured.data[0],
        homepageBanner: banner.data[0],
      },
    };
  } catch (err) {
    return { props: { featuredNews: [], homepageBanner: [] } };
  }
}

export default Home;
