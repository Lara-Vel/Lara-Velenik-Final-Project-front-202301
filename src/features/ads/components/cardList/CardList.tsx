import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import Card from '../../../../shared/components/Card/Card';
import Loader from '../../../../shared/components/Loader/Loader';
import { getAllAdsAsync, selectAdsSlice } from '../../ad-slice';
import { CardListStyled, CardStyled, TitleCardStyled } from './CardListStyled';

const CardList = () => {
  const dispatch = useAppDispatch();
  const { ads, status, responseMessage } = useAppSelector(selectAdsSlice);

  useEffect(() => {
    dispatch(getAllAdsAsync());
  }, [dispatch]);

  const cardsFeedback = () => {
    switch (status) {
      case 'idle':
        return <Loader />;
      case 'success':
        return (
          <>
            <TitleCardStyled>Anuncios</TitleCardStyled>
            <CardListStyled>
              {ads.map(ad => (
                <CardStyled key={ad._id}>
                  <Card ad={ad}></Card>
                </CardStyled>
              ))}
            </CardListStyled>
          </>
        );
      case 'error':
        return <p>{responseMessage}No hemos encontrado ningún gato.</p>;
    }
  };

  return cardsFeedback();
};

export default CardList;
