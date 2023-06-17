import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HotelCard.css';

const HotelCard = ({
  room_name,
  description,
  image_url,
}) => (
  <div className="hotel-card">
    <img src={image_url} alt="Hotel" />
    <h3>{room_name}</h3>
    <div className="border-line" />
    <p className="hotel-description">{description}</p>
    <div>
      <FontAwesomeIcon icon={faBell} />
    </div>
  </div>
);

export default HotelCard;
