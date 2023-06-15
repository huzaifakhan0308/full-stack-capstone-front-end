import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HotelCard = () => {
  return (
    <div>
        <img src="" alt="" />
        <h3>Vespa C20</h3>
        <div></div>
        <p>
            The Vespa C20 is a stunning moped with a modern electric
            system and more.
        </p>
        <div>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            <FontAwesomeIcon icon={faBell} />
        </div>
    </div>
  )
}

export default HotelCard