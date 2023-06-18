import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HotelCard.css';
import { Link } from 'react-router-dom';

const HotelCard = ({
  room_name,
  description,
  image_url,
  reservations_id,
  id,
}) => (
  <div className="hotel-card">
    <img src={image_url} alt="Hotel" />
    <h3>{room_name}</h3>
    <div className="border-line" />
    <p className="hotel-description">{description}</p>
    <div>
      <FontAwesomeIcon icon={faBell} />
    </div>
    {reservations_id === null ? (
      <Link to={`/AddReservation/${id}`}>
        <button type="button">reservation</button>
      </Link>
    ) : <button type="button" disabled>reserved</button>}
  </div>
);

export default HotelCard;
