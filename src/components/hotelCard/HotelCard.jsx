import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HotelCard.css';

const HotelCard = ({
  room_name,
  description,
  image_url,
  reservations_id,
}) => {
  console.log({ room_name, description, image_url });
  return (
    <div className="hotel-card">
      <img src={image_url} alt="Hotel" />
      <h3>{room_name}</h3>
      <div className="border-line" />
      <p className="hotel-description">{description}</p>
      <div>
        <FontAwesomeIcon icon={faBell} />
      </div>
      {reservations_id === null ? (
        <button type="button">reservation</button>
      ) : <button type="button" disabled>reserved</button>}
    </div>
  );
};

export default HotelCard;
