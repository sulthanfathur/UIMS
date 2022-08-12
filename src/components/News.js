import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const News = () => {
    const [newsObject, setNews] = useState([]);
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

    
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/news/`);
                setNews(res.data);
            }
            catch (err) {

            }
        }

        fetchNews();
    }, []);

    const getNews = () => {
        let list = [];
        let result = [];

        newsObject.map(newsPost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h3 className="mb-0">{newsPost.title}</h3>
                        <div className="mb-1 text-muted">{newsPost.month} {newsPost.day}</div>
                        <p className="card-text mb-auto">{newsPost.excerpt}</p>
                        <Link to={`/news/${newsPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={newsPost.thumbnail} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    }

    return (
        <div className='container mt-3'>
            <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{featuredNews.title}</h1>
                    <p className="lead my-3">{featuredNews.excerpt}</p>
                    <p className="lead mb-0">
                        <Link to={`/news/${featuredNews.slug}`} href="#" class="text-white font-weight-bold">
                            Continue reading...
                        </Link>
                    </p>
                </div>
            </div>

            {getNews()}
        </div>
    );
};

export default News;