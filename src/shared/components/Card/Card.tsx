import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Ad } from '../../../models/ads-model';
import { ContainerCard } from './CardStyled';

interface CardProps {
  ad: Ad;
}

const Card: FC<CardProps> = ({ ad }) => {
  const { _id } = ad;

  return (
    <ContainerCard>
      <Link className="detail-link" to={`detail/${_id}`}>
        <img src={ad.image} alt={`Gato ${ad.breed}`} />
        <div className="card-figcaption">
          <div className="textcaption">
            <h2>{ad.breed}</h2>
            <p>{ad.city}</p>
          </div>
        </div>
      </Link>
    </ContainerCard>
  );
};

export default Card;
