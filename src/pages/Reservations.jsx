import React, { useEffect } from 'react';
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
      <h1>Reservations</h1>
      {reservations.map((reservation) => (
        <div key={reservation.id}>

          <p>{reservation.rooms_id}</p>
          <p>{reservation.from_date}</p>
          <p>{reservation.to_date}</p>
        </div>
      ))}
    </section>
  );
};

export default Reservations;
