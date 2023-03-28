import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { createAdAsync, selectAdsSlice } from '../../../ads/ad-slice';
import Loader from '../../../../shared/components/Loader/Loader';
import {
  CreateFormStyled,
  SuccesStyled,
  ErrorStyled,
} from './CreateAdFormStyled';
import * as FaIcons from 'react-icons/fa';

const CreateAdForm = () => {
  const [image, setImage] = useState('');
  const dispatch = useAppDispatch();

  const { createAdStatus } = useAppSelector(selectAdsSlice);

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const image = file ? URL.createObjectURL(file as Blob) : '';
    setImage(image);
  };

  const generateFeedback = () => {
    switch (createAdStatus) {
      case 'idle':
        return <Loader />;
      case 'success':
        return (
          <SuccesStyled>
            <p>Anuncio guardado</p> <FaIcons.FaRegCheckCircle />
          </SuccesStyled>
        );
      case 'error':
        return (
          <ErrorStyled>
            <p>Error datos erróneos</p> <FaIcons.FaRegTimesCircle />
          </ErrorStyled>
        );
      case 'notUsed':
        return <></>;
    }
  };

  return (
    <CreateFormStyled
      data-testid="form"
      onSubmit={e => {
        e.preventDefault();
        dispatch(createAdAsync(e.currentTarget));
      }}
    >
      {generateFeedback()}
      <h1>Introduce los datos de tu anuncio</h1>
      <div className="flex-container">
        <div className="name-surname-breed">
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            name="name"
            pattern="[a-zA-Z ]{3,30}"
            required
            className="input-name-form"
          />

          <input
            type="text"
            id="surname"
            placeholder="Apellido"
            name="surname"
            pattern="[a-zA-Z ]{3,30}"
            required
            className="input-surname-form"
          />

          <select name="breed" className="input-breed-form">
            <option value="azul-ruso">Azul Ruso</option>
            <option value="balines">Balinés</option>
            <option value="bengali">Bengalí</option>
            <option value="bosque-de-noruega">Bosque de Noruega</option>
            <option value="oriental">Oriental</option>
            <option value="siberiano">Siberiano</option>
          </select>
        </div>
        <div className="email-tel-city">
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            required
            className="input-email-form"
          />

          <input
            type="tel"
            maxLength={9}
            name="phone"
            id="phone"
            placeholder="Teléfono"
            required
            className="input-phone-form"
          />

          <input
            type="text"
            id="city"
            placeholder="Ciudad"
            name="city"
            pattern="[a-zA-Z ]{3,30}"
            required
            className="input-city-form"
          />
        </div>

        <label className="ad-img">
          <span>Sube una foto</span>
          <img
            src={image === '' ? '../assets/images/camera.png' : image}
            alt="Insertar imagen"
          />

          <input
            data-testid="File"
            name="cat-ad"
            type="file"
            accept=".jpg,.png,.webp"
            required
            onChange={e => onImageChange(e)}
          />
        </label>
      </div>

      <button type="submit" className="button-save">
        Guardar
      </button>
    </CreateFormStyled>
  );
};

export default CreateAdForm;
