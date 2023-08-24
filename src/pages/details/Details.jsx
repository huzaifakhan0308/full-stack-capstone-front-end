/* eslint-disable */
import {
  faBed, faCircleCheck, faCircleChevronRight, faGear, faTelevision, faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { fetchDetails, resetState } from '../../redux/details/detailsSlice';
import Loading from '../loading/Loading';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const { room, status } = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const loginUserData = JSON.parse(localStorage.getItem('user_data'));
  const user = loginUserData?.user_id;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDetails({ user_id: user, room_id: id }));
    return () => {
      dispatch(resetState());
    };
  }, [location, dispatch, user, id]);

  if (status === 'loading') {
    return <Loading />;
  }

  const navigation = (id) => {
    navigate(`/AddReservation/${id}`);
  };

  return (
    <div className="container-background" style={{ backgroundImage: `url(${room.image_url})` }}>
      <div className="details-container">
        <img src={room.image_url} alt="room" className="details-image" />
        <div className="details-text-container">
          <div className="upper-text-container">
            <h2 className="room-detail-header">{room.room_name}</h2>
            <p>(Reservation for 24hrs only)</p>
            <div className="detail-status-container">
              <div className="detail-status">
                <p>
                  <FontAwesomeIcon icon={faWifi} />
                  Wi-Fi:
                </p>
                <p>{room.wifi}</p>
              </div>

              <div className="detail-status">
                <p>
                  <FontAwesomeIcon icon={faTelevision} />
                  TV:
                </p>
                <p>{room.tv}</p>
              </div>

              <div className="detail-status">
                <p>
                  <FontAwesomeIcon icon={faBed} />
                  Beds:
                </p>
                <p>{room.beds}</p>
              </div>
            </div>
          </div>
          {
            room.reservations_id === null ? (
              <div className="positioning">
                <div className="details-reserve-btn" onClick={() => { navigation(id); }}>
                  <FontAwesomeIcon icon={faGear} />
                  <p>reserve</p>
                  <FontAwesomeIcon icon={faCircleChevronRight} />
                </div>
              </div>
            ) : (
              <div className="positioning">
                <div className="details-reserve-btn reserved">
                  <FontAwesomeIcon icon={faGear} />
                  <p>reserved</p>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Details;
