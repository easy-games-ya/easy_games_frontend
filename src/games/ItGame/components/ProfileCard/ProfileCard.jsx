import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, avatar, score }) => {
  return (
    <div className='profile-card'>
      <img className='profile-card__avatar' src={avatar} alt={name} />
      <p className='profile-card__name'>{name}</p>
      <p className='profile-card__score'>{score}</p>
    </div>
  );
};

export default ProfileCard;
