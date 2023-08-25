import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../redux/home/homeSlice';
import '../styles/RoomList.css';

const RoomList = () => {
  const dispatch = useDispatch();
  const loginUserData = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() => {
    dispatch(fetchHotels(loginUserData.user_id));
  }, [dispatch, loginUserData.user_id]);

  const { hotels } = useSelector((store) => store.home);

  const deleteRoom = async (id) => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/${loginUserData.user_id}/rooms/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: loginUserData.password }),
    });
    window.location.reload();
  };
  return (
    <div className="roomList">
      <h1>MY ROOMS</h1>
      {
        hotels.filter((hotel) => hotel.users_id === loginUserData.user_id)
          .map((hotel) => (
            <div key={hotel.room_name}>
              <img height="200px" width="200px" src={hotel.image_url} alt={hotel.room_name} />
              <h2>{hotel.room_name}</h2>
              <button onClick={() => deleteRoom(hotel.id)} type="button">Delete Room</button>
            </div>
          ))
      }
    </div>
  );
};

export default RoomList;
