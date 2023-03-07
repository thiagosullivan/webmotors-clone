import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeBlog from '../../components/Home/HomeBlog';
import HomeCategories from '../../components/Home/HomeCategories';
import HomeOptions from '../../components/Home/HomeOptions';
import HomeSearch from '../../components/Home/HomeSearch';
import './styles.scss';

function Home() {
  return (
    <div id="home">
      <div className='content'>
        <Header />
        <main>
          <HomeSearch />
          <HomeCategories />
          <HomeBlog />
          <HomeOptions />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home