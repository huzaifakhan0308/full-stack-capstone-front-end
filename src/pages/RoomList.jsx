import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../redux/home/homeSlice';

const RoomList = () => {
  const dispatch = useDispatch();
  const loginUserData = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() => {
    dispatch(fetchHotels(loginUserData.user_id));
  }, []);

  const { hotels } = useSelector((store) => store.home);
  return (
    <div>
      {
        hotels.filter((hotel) => hotel.users_id === loginUserData.user_id).map((hotel) => <h2>{hotel.room_name}</h2>)
      }
    </div>
  );
};

export default RoomList;
