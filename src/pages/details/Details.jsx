import { faBed, faTelevision, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';

const Details = () => {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    
  }, [location]);

  return (
    <div>
      <img src="" alt="" />
      <div>
        <h2>Presidential Suite</h2>
        <p>(Reservation for 24hrs only)</p>
        <div>
          <p>
            <FontAwesomeIcon icon={faWifi} />
            Wi-Fi:
          </p>
          <p>Available</p>
        </div>

        <div>
          <p>
            <FontAwesomeIcon icon={faTelevision} />
            TV:
          </p>
          <p>Available</p>
        </div>

        <div>
          <p>
            <FontAwesomeIcon icon={faBed} />
            Beds:
          </p>
          <p>Available</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
