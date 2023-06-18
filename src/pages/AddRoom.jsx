import React, { useState } from 'react';
import '../styles/addRoom.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CreateRoom } from '../redux/room/roomsSlice';

const AddRoom = () => {
  const loginUserData = JSON.parse(localStorage.getItem('user_data'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const room = {
      room_name: formData.get('room_name'),
      description: formData.get('description'),
      wifi: formData.get('wifi'),
      tv: formData.get('tv'),
      room_service: formData.get('room_service'),
      beds: Number(formData.get('beds')),
      image_url: formData.get('image').name,
      users_id: loginUserData.user_id,
    };
    dispatch(CreateRoom({
      room,
      password: loginUserData.password,
    }));
    navigate('/');
  };

  return (
    <section className="addRoom-container">
      <div className="overlay1">
        <form onSubmit={handleSubmit}>
          <h1>Create Room</h1>
          <input type="text" name="room_name" placeholder="Room Name" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="wifi" placeholder="WiFi" />
          <input type="text" name="tv" placeholder="TV" />
          <input type="text" name="room_service" placeholder="Room Service" />
          <input type="text" name="address" placeholder="Room Address" />
          <input type="number" name="beds" placeholder="Number of Beds" />
          <input type="text" name="address" placeholder="Room Address" />
          select image for creating room
          <input type="file" name="image" onChange={handleImageUpload} />
          <button type="submit">Add Room</button>
        </form>
      </div>
    </section>
  );
};

export default AddRoom;
