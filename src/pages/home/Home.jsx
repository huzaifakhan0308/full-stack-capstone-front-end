import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import 'react-multi-carousel/lib/styles.css';
import { NavLink, useLocation } from 'react-router-dom';
import HotelCard from '../../components/hotelCard/HotelCard';
import { fetchHotels } from '../../redux/home/homeSlice';
import Loading from '../loading/Loading';

const Home = () => {
  const loginUserData = JSON.parse(localStorage.getItem('user_data'));

  const { hotels, status } = useSelector((store) => store.home);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchHotels(loginUserData.user_id));
  }, [location, dispatch, loginUserData.user_id]);

  if (status === 'loading') {
    return <Loading />;
  }
  return (
    <main className="home-container">
      <div className="bg-image">
        <div className="header-background">
          <h2 className="home-header">LATEST HOTELS</h2>
          <p className="home-text">Please select a hotel</p>
        </div>
      </div>

      <div className="home-hotel-list">
        {hotels.map((hotel) => (
          <NavLink key={hotel.id} to={`/details/${hotel.id}`} className="nav-link">
            <HotelCard {...hotel} />
          </NavLink>
        ))}
      </div>
    </main>
  );
};

export default Home;
