import React from "react";
import axios from "axios";
import Link from "next/link";

const News = ({ newsObject, featuredNews }) => {
  const getNews = () => {
    let list = [];
    let result = [];

    newsObject.map((newsPost) => {
      return list.push(
        <div className="card mb-5 shadow-sm bg-darkgrey">
          <img
            classNameName="card-img-top"
            width="100%"
            height="225"
            src={newsPost.thumbnail}
            alt="thumbnail"
          />
          <div className="card-body">
            <h4>{newsPost.title}</h4>
            <p id="excerpt" classNameName="card-text excerpt mb-auto">
              {newsPost.excerpt}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link
                  href={`/news/${featuredNews.slug}`}
                  className="btn btn-primary btn-lg"
                >
                  Read
                </Link>
              </div>
              <small className="text-muted mt-3">
                {newsPost.month} {newsPost.day}
              </small>
            </div>
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 3) {
      result.push(
        <div key={i} className="row">
          <div className="col-md-4">{list[i]}</div>
          <div className="col-md-4">{list[i + 1] ? list[i + 1] : null}</div>
          <div className="col-md-4">{list[i + 2] ? list[i + 2] : null}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <div className="container mt-5">
      <div className="row mx-0 my-5 bg-darkgrey">
        <div className="col m-4 mb-2 flex-column position-static">
          <p className="slogan mb-0 mt-2 akira">featured news</p>
          <h3 className="display-4 text-break">{featuredNews.title}</h3>
          <p className="lead my-3">{featuredNews.excerpt}</p>
          <hr />
          <Link
            href={`/news/${featuredNews.slug}`}
            className="btn btn-primary btn-lg"
          >
            Read
          </Link>
        </div>
        <div className="">
          <img
            className="card-img-top"
            width="500"
            height="331"
            src={featuredNews.thumbnail}
            alt="thumbnail"
          />
        </div>
      </div>

      {getNews()}
    </div>
  );
};

export async function getStaticProps() {
  let newsObject = [];
  let featuredNews = [];

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/homepage/news/featured`
    );
    featuredNews = res.data[0];
  } catch (err) {}

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/homepage/news/`
    );
    newsObject = res.data;
  } catch (err) {}

  return {
    props: {
      newsObject,
      featuredNews,
    },
  };
}

export default News;
