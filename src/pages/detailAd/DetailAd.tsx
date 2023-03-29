import { useParams } from 'react-router-dom';
import CardDetail from '../../features/ads/components/cardDetail/CardDetail';

const DetailAd = () => {
  const { _id } = useParams();
  return (
    <>
      <CardDetail adId={_id ?? ''} />
    </>
  );
};

export default DetailAd;
