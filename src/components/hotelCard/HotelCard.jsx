import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './HotelCard.css'
import Image from '../../img/skysports-logo-social-300x169.png'

const HotelCard = () => {
  return (
    <div className='hotel-card'>
        <img src={Image} alt="Hotel image" />
        <h3>Vespa C20</h3>
        <div className='border-line'></div>
        <p className='hotel-description'>
          The Vespa C20 is a stunning moped with a modern electric
          system and more.
        </p>
        <div>
            <FontAwesomeIcon icon={faBell} />
        </div>
    </div>
  )
}

export default HotelCard