import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

function Rating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{ color: '#FFD700' }} />);
    }

    // Render half star if applicable
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon icon={faStarHalf} key={fullStars} style={{ color: '#FFD700' }} />);
    }

    // Render empty stars
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
}

export default Rating;
