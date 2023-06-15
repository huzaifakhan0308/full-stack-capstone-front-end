import { reservationActions } from '../Slices/ReservationSlice';

export const createReservation = async (from_date, to_date, city, users_id, rooms_id) => {
  const response = await fetch(`https://hotels-reservations.onrender.com/users/${rooms_id}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({

      from_date,
      to_date,
      city,
      users_id,
      rooms_id,

    }),
  });
  const data = await response.json();
  console.log(data);
};

export const viewMyReservations = (users_id) => async (dispatch) => {
  const response = await fetch(`https://hotels-reservations.onrender.com/users/${users_id}/reservations`);
  const data = await response.json();
  console.log(data);

  const { reservations } = data;

  dispatch(reservationActions.allReservations(reservations));
};
