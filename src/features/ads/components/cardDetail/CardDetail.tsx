import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import Loader from '../../../../shared/components/Loader/Loader';
import { getAdByIdsAsync, selectAdsSlice } from '../../ad-slice';
import {
  azulRusoDescription,
  balinesDescription,
  bengaliDescription,
  bosqueDeNoruegaDescription,
  orientalDescription,
  siberianoDescription,
} from '../../../../shared/data/description';
import { DetailContainer } from './CardDetailStyled';
import {
  FaQuoteLeft,
  FaGlobe,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

interface CardDetailProps {
  adId: string;
}

const CardDetail: FC<CardDetailProps> = ({ adId }) => {
  const { ad, status } = useAppSelector(selectAdsSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAdByIdsAsync(adId));
  }, [dispatch, adId]);

  const getDescription = () => {
    switch (ad.breed) {
      case 'Azul Ruso':
        return azulRusoDescription;
      case 'Balinés':
        return balinesDescription;
      case 'Bengalí':
        return bengaliDescription;
      case 'Bosque de Noruega':
        return bosqueDeNoruegaDescription;
      case 'Oriental':
        return orientalDescription;
      case 'Siberiano':
        return siberianoDescription;
    }
  };

  const detailAdState = () => {
    switch (status) {
      case 'idle':
        return <Loader />;
      case 'error':
        return <p data-testid="error-msg">{'El anuncio buscado no existe'}</p>;
      default:
        return (
          <>
            <DetailContainer className="detail-container">
              <h2>{ad.breed}</h2>
              <div className="detail-container-info">
                <div className="detail-img">
                  <img src={ad.image} alt={ad.breed} />
                </div>
                <div className="detail-info">
                  <div className="info-line">
                    <FaQuoteLeft
                      style={{
                        color: 'royalblue',
                      }}
                    />
                    <p className="name-info">{ad.name}</p>
                  </div>
                  <div className="info-line">
                    <FaQuoteLeft
                      style={{
                        color: 'royalblue',
                      }}
                    />
                    <p className="surname-info">{ad.surname}</p>
                  </div>
                  <div className="info-line">
                    <FaGlobe
                      style={{
                        color: 'royalblue',
                      }}
                    />
                    <p className="email-info">{ad.email}</p>
                  </div>
                  <div className="info-line">
                    <FaPhoneAlt
                      style={{
                        color: 'royalblue',
                      }}
                    />
                    <p className="phone-info">{ad.phone}</p>
                  </div>
                  <div className="info-line">
                    <FaMapMarkerAlt
                      style={{
                        color: 'royalblue',
                      }}
                    />
                    <p className="city-info">{ad.city}</p>
                  </div>
                  <div className="info-line-nature">
                    Carácter:
                    <p className="description-info">{getDescription()}</p>
                  </div>
                </div>
              </div>
            </DetailContainer>
          </>
        );
    }
  };

  return <> {detailAdState()}</>;
};

export default CardDetail;
