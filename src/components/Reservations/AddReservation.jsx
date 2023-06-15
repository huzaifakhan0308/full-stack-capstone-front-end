import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser } from '../../redux/Actions/UserActions';
// import { fetchrooms } from '../../redux/Actions/RoomActions';
import { createReservation } from '../../redux/Actions/ReservationActions';

const AddReservation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedRoomId = location.state?.id;

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const [to_date, setDate] = useState(undefined);
  const [city, setCity] = useState('');
  const [rooms_id, setRooms_id] = useState(selectedRoomId || '');
  const [users_id, setUserId] = useState('');
  const [notice, setNotice] = useState('');

  const users = useSelector((state) => state.users);

  useEffect(() => {
    setUser(users?.find((user) => user.name === JSON.parse(localStorage.getItem('username'))) || 0);
  }, [users]);

  const [options, setOptions] = useState([]);
  const roomOptions = [];

  const createNewReservation = ( from_date, to_date, city, users_id, rooms_id ) => ({
    from_date,
    to_date,
    city,
    users_id,
    rooms_id,
  });

  const rooms = useSelector((state) => state.rooms);
  if (rooms_id === '') {
    rooms.forEach((room) => {
      roomOptions.push(room);
    });
  }

  useEffect(() => {
    if (rooms_id === '') {
     
      dispatch(fetchrooms());
    }
  }, [dispatch, rooms_id]);

  useEffect(() => {
    setOptions(roomOptions);
  }, [rooms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rooms_id === '') {
      setNotice('Error trying to submit request. Please try again.');
    } else {
      const reservation = createNewReservation(user.users_id, rooms_id, to_date, city, form_date);
      dispatch(createReservation(reservation));
      setDate(null);
      setCity('');
      setTimeout(() => {
        window.location.href = '/';
      }, 200);
    }
  };

  return (
    <div className="">
      <div className="">
        <form onSubmit={handleSubmit} className="">
          {options && options.length > 0
            ? (
              <select value={rooms_id} onChange={(e) => setRooms_id(e.target.value)}>
                <option value="" className="" disabled>Select a room to reserve</option>
                {options && options.map((option) => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            )
            : (
              <select disabled value={rooms_id}>
                <option value={rooms_id}>{location.state?.name}</option>
              </select>
            )}
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <input placeholder="City" type="text" name="City" value={city} onChange={(e) => setCity(e.target.value)} required />
          <div className="error-message">
            <p id="message">{notice}</p>
          </div>
          <div className="btn-group">
            <button type="submit" name="Submit Reservation">Reserve Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddReservation;
