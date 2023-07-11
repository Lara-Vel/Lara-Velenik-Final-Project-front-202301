import styled from 'styled-components';

export const CreateFormStyled = styled.form`
  padding: 0 1rem;
  gap: 1.5rem;
  max-width: 90rem;
  align-items: center;
  justify-content: center;
  color: #7f7e84;
  font-family: var(--main-font-regular);
  padding-top: 6rem;
  margin: 5rem auto;
  @media screen and (max-width: 376px) {
    padding: 1rem 3rem 0 3rem;
    margin: 0;
  }

  .flex-container {
    display: flex;
    margin-top: 4rem;
    width: 100%;
    gap: 2.5rem;
    margin-bottom: 4rem;
    @media screen and (max-width: 376px) {
      margin-top: 1.5rem;
      flex-direction: column;
      margin-bottom: 4rem;
      gap: 0;
    }
  }

  h1 {
    width: 100%;
    font-family: var(--main-font-regular);
    font-size: 2rem;
    @media screen and (max-width: 376px) {
      font-size: 1.1rem;
      padding-bottom: 1rem;
    }
  }

  div {
    width: 33%;
    min-height: 2rem;
    margin-bottom: 1rem;
  }

  .flex-container .name-surname-breed {
    gap: 2rem;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 376px) {
      gap: 2rem;
      width: 100%;
    }
  }

  .flex-container .name-surname-breed .input-name-form {
    width: 100%;
    padding: 0.8rem;
    border: 0.1rem solid #cfcaca;
    border-radius: 0.5rem;
    font-size: 1.6rem;
  }

  .flex-container .name-surname-breed .input-surname-form {
    width: 100%;
    padding: 0.8rem;
    border: 0.1rem solid #cfcaca;
    border-radius: 0.5rem;
    font-size: 1.6rem;
  }

  .flex-container .name-surname-breed .input-breed-form {
    width: 100%;
    padding: 0.8rem;
    border: 0.1rem solid #cfcaca;
    border-radius: 0.5rem;
    color: #7f7e84;
    font-size: 1.6rem;
  }

  .flex-container .email-tel-city .input-email-form {
    width: 100%;
    padding: 0.8rem;
    border: 0.1rem solid #cfcaca;
    border-radius: 0.5rem;
    font-size: 1.6rem;
  }

  .flex-container .email-tel-city .input-phone-form {
    width: 100%;
    padding: 0.8rem;
    border: 0.1rem solid #cfcaca;
    border-radius: 0.5rem;
    font-size: 1.6rem;
  }

  .flex-container .email-tel-city .input-city-form {
    width: 100%;
    padding: 0.8rem;
    border: 0.1rem solid #cfcaca;
    border-radius: 0.5rem;
    font-size: 1.6rem;
  }

  .flex-container .email-tel-city {
    gap: 2rem;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 376px) {
      gap: 2rem;
      width: 100%;
    }
  }

  .button-save {
    width: 33%;
    padding: 0.8rem;
    background: #627abd;
    color: white;
    font-size: 1.6rem;
    border-radius: 0.5rem;
    font-weight: 700;
    border: none;

    @media screen and (max-width: 376px) {
      width: 100%;
      padding: 0.8rem;
    }
  }

  .flex-container .ad-img {
    height: 10rem;
    width: 10rem;
    border-radius: var(--radius-m);
    position: relative;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    text-align: center;
    @media screen and (max-width: 376px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5.5rem;
      margin-bottom: 0rem;
    }

    span {
      font-family: var(--main-font-regular);
      font-size: 1.5rem;
      width: 100%;
      text-align: center;
      position: absolute;
      left: 50%;
      bottom: -2.5rem;
      transform: translate(-50%, 0%);
      @media screen and (max-width: 376px) {
        width: 8.5rem;
        bottom: -0.5rem;
      }
    }

    input {
      display: none;
    }
    img {
      width: 6.4rem;
    }
  }
`;

export const SuccesStyled = styled.div`
  color: #24997f;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ErrorStyled = styled.div`
  color: #bc1c47;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
