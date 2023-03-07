import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeSearch from '../../components/Home/HomeSearch';
import './styles.scss';

function Home() {
  return (
    <div id="home">
      <div className='content'>
        <Header />
        <main>
          <HomeSearch />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home