import React, { useEffect } from 'react';
import '../styles/reservations.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { GetReservation } from '../redux/reservation/reservationListSlice';
import { fetchHotels } from '../redux/home/homeSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservationList.reservations) || [];

  const loginUserData = JSON.parse(localStorage.getItem('user_data'));

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetReservation({
      user_id: loginUserData.user_id,

    }), [dispatch]);
    dispatch(fetchHotels(loginUserData.user_id));
  }, [dispatch, loginUserData.user_id]);

  const { hotels } = useSelector((store) => store.home);

  const cancelReservation = async (id) => {
    const response = await fetch(`https://hotels-reservations.onrender.com/users/${loginUserData.user_id}/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: loginUserData.password }),
    });

    if (response.ok) {
      navigate('/');
      return (
        <h2>reservation cancelled</h2>
      );
    } else {
      return (
        <h2>Failed to cancel reservation</h2>
      );
    }
  };

  if (!reservations.length) <h1 className="title">No reservations</h1>;

  return (
    <section className="container">
      <h1 className="title">Reservations</h1>
      <br />
      {reservations.map((reservation) => (
        <div key={reservation.id} className="card">

          <h2>
            Room Name:
            {hotels[reservation?.rooms_id]?.room_name}
          </h2>
          <div className="date">
            <h3>
              From date:
              {reservation.from_date}
            </h3>
            <h3>
              To date:
              {reservation.to_date}
            </h3>
            <br />
            <button className="btn" type="button" onClick={() => cancelReservation(reservation.id)}>Cancel reservation</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Reservations;
