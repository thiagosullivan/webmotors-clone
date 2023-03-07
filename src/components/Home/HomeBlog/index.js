import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './styles.scss';
import data from './blog.json';
import { Link } from 'react-router-dom';

function HomeBlog() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



  return (
    <div className='home-news maxContent'>
        <h2>Notícias</h2>
        <Carousel responsive={responsive}>

            {data.map((news, index) => {
                return (
                    <Link to={news.newsUrl} className='news-card' key={index}>
                        <div className='news-card-img' style={{backgroundImage: `url('${news.newsImg}')`}}></div>
                        <div className='news-card-infos'>
                            <div className='news-card-cate'><span>{news.newsCategory}</span></div>
                            <h3>{news.newsTitle}</h3>
                            <div className='news-card-author'>
                                <img src={news.newsAvatar} alt={news.newsName}/>
                                <p>por {news.newsName}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </Carousel>
    </div>
  )
}

export default HomeBlog