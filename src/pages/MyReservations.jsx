import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { viewMyReservations } from '../redux/Actions/ReservationActions';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservationSlice.Reservations);

  useEffect(() => {
    dispatch(viewMyReservations());
    // Fetch reservations for the specific user
  }, [dispatch]);

  return (
    <div className="">
      <h1 className="">My Reservations</h1>
      <table>
        <thead>
          <tr>
            <th>Room ID</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {reservations && reservations.length > 0 ? (
            reservations.map((reservation) => (
              <tr key={reservation.users_id}>
                <td>{reservation.rooms_id}</td>
                <td>{reservation.from_date}</td>
                <td>{reservation.to_date}</td>
                <td>{reservation.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No reservations found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyReservations;
