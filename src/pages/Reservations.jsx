import React, { useEffect } from 'react';
import '../styles/reservations.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetReservation } from '../redux/reservation/reservationListSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservationList.reservations) || [];

  const loginUserData = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() => {
    dispatch(GetReservation({
      user_id: loginUserData.user_id,

    }));
  }, [dispatch]);

  return (
    <section className="container">
      <h1 className="title">Reservations</h1>
      <br />
      {reservations.map((reservation) => (
        <div key={reservation.id} className="card">

          <h2>
            Room ID:
            {reservation.rooms_id}
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
            <button className="btn" type="submit">Cancel reservation</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Reservations;
