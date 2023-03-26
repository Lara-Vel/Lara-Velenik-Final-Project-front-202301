import React, { FC } from 'react';
import { Ad } from '../../../models/ads-model';
import { ContainerCard } from './CardStyled';

interface CardProps {
  ad: Ad;
}

const Card: FC<CardProps> = ({ ad }) => {
  return (
    <ContainerCard>
      <img src={ad.image} alt={`Gato ${ad.breed}`} />
      <div className="card-figcaption">
        <div className="textcaption">
          <h2>{ad.breed}</h2>
          <p>{ad.city}</p>
        </div>
      </div>
    </ContainerCard>
  );
};

export default Card;
