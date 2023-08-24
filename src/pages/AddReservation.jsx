import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CreateReservation } from '../redux/reservation/reservationSlice';

const AddReservation = () => {
  const { id } = useParams();
  const loginUserData = JSON.parse(localStorage.getItem('user_data'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const reservation = {
      from_date: formData.get('from_date'),
      to_date: formData.get('to_date'),
      users_id: loginUserData.user_id,
      rooms_id: id,
    };
    dispatch(CreateReservation({
      reservation,
      password: loginUserData.password,
    }));
    navigate('/');
  };

  return (
    <section className="addRoom-container">
      <div className="overlay1">
        <form onSubmit={handleSubmit}>
          <h1>Create Reservation</h1>
          <br />
          From:
          <input type="date" name="from_date" placeholder="From" required />
          To:
          <input type="date" name="to_date" placeholder="To" required />
          <button type="submit">Reserved room</button>
        </form>
      </div>
    </section>
  );
};

export default AddReservation;
