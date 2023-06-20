import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchHotels } from '../redux/home/homeSlice';
import './RoomList.css';

const RoomList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUserData = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() => {
    dispatch(fetchHotels(loginUserData.user_id));
  }, [dispatch, loginUserData.user_id]);

  const { hotels } = useSelector((store) => store.home);

  const deleteRoom = async (id) => {
    const response = await fetch(`https://hotels-reservations.onrender.com/users/${loginUserData.user_id}/rooms/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: loginUserData.password }),
    });
    if (response.ok) {
      navigate('/');
    }
  };
  return (
    <div className="roomList">
      <h1>MY ROOMS</h1>
      {
        hotels.filter((hotel) => hotel.users_id === loginUserData.user_id)
          .map((hotel) => (
            <span key={hotel.room_name}>
              <img height="200px" width="200px" src={hotel.image_url} alt={hotel.room_name} />
              <h2>{hotel.room_name}</h2>
              <button onClick={() => deleteRoom(hotel.id)} type="button">Delete Room</button>
            </span>
          ))
      }
    </div>
  );
};

export default RoomList;
