import { faBed, faTelevision, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { fetchDetails, resetState } from '../../redux/details/detailsSlice';
import Loading from '../loading/Loading';

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const { room, status } = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const loginUserData = JSON.parse(localStorage.getItem('user_data'));
  const user = loginUserData?.user_id;
  console.log(id);

  useEffect(() => {
    dispatch(fetchDetails({ user_id: user, room_id: id }));
    return () => {
      dispatch(resetState());
    };
  }, [location, dispatch, user, id]);

  if (status === 'loading') {
    return <Loading />;
  }
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h2>{room.room_name}</h2>
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
