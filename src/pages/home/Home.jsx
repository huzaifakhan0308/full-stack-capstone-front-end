import React from 'react';
import Carousel from 'react-multi-carousel';
import { useSelector } from 'react-redux';
import './Home.css';
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from 'react-router-dom';
import HotelCard from '../../components/hotelCard/HotelCard';

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { hotels } = useSelector((store) => store.home);

  return (
    <main className="home-container">
      <h2 className="home-header">LATEST HOTELS</h2>
      <p className="home-text">Please select a hotel</p>

      <Carousel responsive={responsive} className="home-hotel-list">
        {hotels.map((hotel) => (
          <NavLink key={hotel.id} to={`/${hotel.id}`} className="nav-link">
            <HotelCard {...hotel} />
          </NavLink>
        ))}
      </Carousel>

      <footer />
    </main>
  );
};

export default Home;
