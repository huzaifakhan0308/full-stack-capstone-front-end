/* eslint-disable */
import React, { useEffect, useState } from 'react';
import '../styles/addRoom.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CreateRoom } from '../redux/room/roomsSlice';

const AddRoom = () => {
  const loginUserData = JSON.parse(localStorage.getItem('user_data'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validImage, setValidImage] = useState(true);

  const handleImageCheck = (event) => {
    const imageUrl = event.target.value;
    const img = new Image();

    img.onload = () => {
      setValidImage(true);
    };

    img.onerror = () => {
      setValidImage(false);
    };

    img.src = imageUrl;
  };

  const createRoomStatus = useSelector((state) => state.room.status);
  const [responseError, setResponseError] = useState('normal');

  useEffect(() => {
    if (createRoomStatus === 'pending') {
      setResponseError(false);
    } else if (createRoomStatus === 'fulfilled') {
      setResponseError('normal');
      navigate('/');
    } else if (createRoomStatus === 'rejected') {
      setResponseError(true);
    }
  }, [createRoomStatus]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validImage) {
      alert('Please provide a valid image link.');
      return;
    }

    const form = event.target;
    const formData = new FormData(form);

    const room = {
      room_name: formData.get('room_name'),
      description: formData.get('description'),
      wifi: formData.get('wifi'),
      tv: formData.get('tv'),
      room_service: formData.get('room_service'),
      beds: Number(formData.get('beds')),
      address: formData.get('address'),
      image_url: formData.get('image'),
      users_id: loginUserData.user_id,
    };

    dispatch(CreateRoom({
      room,
      password: loginUserData.password,
    }));
  };

  return (
    <section className="addRoom-container">
      <div className="overlay1">
        {(responseError === 'normal') ? (
          <form onSubmit={handleSubmit}>
            <h1>Create Room</h1>
            <input type="text" name="room_name" placeholder="Room Name" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="wifi" placeholder="WiFi" />
            <input type="text" name="tv" placeholder="TV" />
            <input type="text" name="room_service" placeholder="Room Service" />
            <input type="number" name="beds" placeholder="Number of Beds" />
            <input type="text" name="address" placeholder="Room Address" />
            <input
              type="text"
              name="image"
              placeholder="Image Link"
              onChange={handleImageCheck}
            />
            {!validImage && <p className="error-message">Invalid image link</p>}
            <button type="submit">Add Room</button>
          </form>
        ) : responseError ? (
          <form>
            <h2>Try again</h2>
          </form>
        ) : (
          <form>
            <h2>Loading...</h2>
          </form>
        )}
      </div>
    </section>
  );
};

export default AddRoom;
