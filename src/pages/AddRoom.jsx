import React, { useState } from 'react';
import '../styles/addRoom.css';
import { useDispatch } from 'react-redux';
import { CreateRoom } from '../redux/room/roomsSlice';

const AddRoom = () => {
  const loginUserData = JSON.parse(localStorage.getItem('user_data'));
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const dataUrl = reader.result;
        setSelectedImage(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
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
      address: formData.get('address'),
      image_url: selectedImage,
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
        <form onSubmit={handleSubmit}>
          <h1>Create Room</h1>
          <input type="text" name="room_name" placeholder="Room Name" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="wifi" placeholder="WiFi" />
          <input type="text" name="tv" placeholder="TV" />
          <input type="text" name="room_service" placeholder="Room Service" />
          <input type="number" name="beds" placeholder="Number of Beds" />
          <input type="text" name="address" placeholder="Room Address" />
          select image for creating room
          <input type="file" name="image" onChange={handleImageUpload} />
          <button type="submit" className="a">Add Room</button>
        </form>
      </div>
    </section>
  );
};

export default AddRoom;
