import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetReservation } from '../redux/reservation/reservationListSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations) || [];

  const loginUserData = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() => {
    dispatch(GetReservation({
      user_id: loginUserData.user_id,

    }));
  }, []);

  return (
    <section className="container">
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <p>{reservation.from_date}</p>
          <p>{reservation.to_date}</p>
        </div>
      ))}
    </section>
  );
};

export default Reservations;
