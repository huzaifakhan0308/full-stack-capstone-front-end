import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HotelCard.css';
import { Link } from 'react-router-dom';
import { faCheck, faChevronRight, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const HotelCard = ({
  room_name,
  description,
  image_url,
  reservations_id,
  id,
}) => (
  <div className="hotel-card">
    <div className="img-div">
      <img src={image_url} alt="Hotel" />
    </div>

    <div className="description-div">
      <h3 className="card-header">{room_name}</h3>
      <div className="border-line" />
      <p className="hotel-description">{description}</p>
      <div className="card-icons">
        <FontAwesomeIcon icon={faBell} />
      </div>
    </div>

    <div className="card-buttons">
      <div className="card-details-btn">
        <p>Details</p>
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </div>
      {reservations_id === null ? (
        <Link to={`/AddReservation/${id}`}>
          <div className="card-reserve-btn">
            <p>reserve</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>
      ) : (
        <button type="button" disabled className="card-reserve-btn bg-green">
          reserved
          <span><FontAwesomeIcon icon={faCheck} /></span>
        </button>
      )}
    </div>
  </div>
);

export default HotelCard;
