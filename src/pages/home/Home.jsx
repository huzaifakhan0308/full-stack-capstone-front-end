import React from 'react';
import HotelCard from '../../components/hotelCard/HotelCard';
import './Home.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
  <main className='home-container'>
    <h2 className='home-header'>LATEST MODELS</h2>
    <p className='home-text'>Please select a vespa model</p>

    <Carousel responsive={responsive} className='home-hotel-list'>
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </Carousel>

    <footer></footer>
  </main>
)};

export default Home;
