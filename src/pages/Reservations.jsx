import React, { useEffect, useState } from 'react';
import '../styles/reservations.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetReservation } from '../redux/reservation/reservationListSlice';
import { fetchHotels } from '../redux/home/homeSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservationList.reservations) || [];

  const loginUserData = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() => {
    dispatch(GetReservation({
      user_id: loginUserData.user_id,

    }), [dispatch]);
    dispatch(fetchHotels(loginUserData.user_id));
  }, [dispatch, loginUserData.user_id]);

  const { hotels } = useSelector((store) => store.home);

  const [disable, setDisable] = useState(false);

  const cancelReservation = async (id) => {
    setDisable(true);
    const response = await fetch(`https://hotels-reservations.onrender.com/users/${loginUserData.user_id}/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: loginUserData.password }),
    });
    setDisable(false);
    if (response.ok) {
      window.location.reload();
    } else {
      alert('Opps something went wrong try again!');
    }
  };

  return (
    <section className="container">
      <h1 className="title">My Reservations</h1>
      <br />
      {reservations?.map((reservation) => (
        <div key={reservation.id} className="card">
          <img src={hotels.find((hotel) => hotel.id === reservation.rooms_id)?.image_url} alt="" />
          <div className="date">
            <h2>
              {hotels.find((hotel) => hotel.id === reservation.rooms_id)?.room_name}
            </h2>
            <h3>
              From date:
              {reservation.from_date}
            </h3>
            <h3>
              To date:
              {reservation.to_date}
            </h3>
            <br />
            <button disabled={disable} style={{ opacity: disable ? '20%' : '100%' }} className="btn" type="button" onClick={() => cancelReservation(reservation.id)}>Cancel reservation</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Reservations;
