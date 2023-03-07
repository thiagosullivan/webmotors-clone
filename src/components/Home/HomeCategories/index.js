import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './styles.scss';
import data from './categories.json';
import { Link } from 'react-router-dom';

function HomeCategories() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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
    <div className='home-categories maxContent'>
        <h2>Categorias</h2>
        <Carousel responsive={responsive}>

            {data.map((category, index) => {
                return (
                    <Link to={category.categoryUrl} className='categories-card' key={index}>
                        <p>{category.categoryName}</p>
                        <img src={category.categoryImg} alt={category.categoryName}/>
                    </Link>
                )
            })}
        </Carousel>
    </div>
  )
}

export default HomeCategories