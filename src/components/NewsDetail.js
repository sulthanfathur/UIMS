import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const NewsDetail = () => {
    const [newsPost, setNews] = useState({});
    const { id } = useParams()
    useEffect(() => {
        const slug = id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/news/${slug}`);
                setNews(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [id]);

    const createNews = () => {
        return {__html: newsPost.content}
    };

    return (
        <div className='container mt-3'>
            <h1 className='display-2'>{newsPost.title}</h1>
            <h4>{newsPost.month} {newsPost.day}</h4>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createNews()} />
            <hr />
            <p className='lead mb-5'><Link to='/news' className='font-weight-bold'>Back to News</Link></p>
        </div>
    );
};

export default NewsDetail;