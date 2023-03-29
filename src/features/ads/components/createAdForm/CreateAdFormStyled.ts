import styled from 'styled-components';

export const CreateFormStyled = styled.form`
  padding: 0 1rem;
  gap: 1.5rem;
  width: 900px;
  align-items: center;
  justify-content: center;
  color: #7f7e84;
  font-family: var(--main-font-regular);
  padding-top: 60px;
  margin: 5rem auto;
  @media screen and (max-width: 376px) {
    padding: 100px 30px 0 30px;
    margin: 0;
    width: 482px;
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
    font-size: 1.3rem;
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
    gap: 20px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 376px) {
      gap: 20px;
      width: 100%;
    }
  }

  .flex-container .name-surname-breed .input-name-form {
    width: 100%;
    padding: 8px;
    border: 1px solid #cfcaca;
    border-radius: 5px;
    font-size: 16px;
  }

  .flex-container .name-surname-breed .input-surname-form {
    width: 100%;
    padding: 8px;
    border: 1px solid #cfcaca;
    border-radius: 5px;
    font-size: 16px;
  }

  .flex-container .name-surname-breed .input-breed-form {
    width: 100%;
    padding: 8px;
    border: 1px solid #cfcaca;
    border-radius: 5px;
    color: #7f7e84;
    font-size: 16px;
  }

  .flex-container .email-tel-city .input-email-form {
    width: 100%;
    padding: 8px;
    border: 1px solid #cfcaca;
    border-radius: 5px;
    font-size: 16px;
  }

  .flex-container .email-tel-city .input-phone-form {
    width: 100%;
    padding: 8px;
    border: 1px solid #cfcaca;
    border-radius: 5px;
    font-size: 16px;
  }

  .flex-container .email-tel-city .input-city-form {
    width: 100%;
    padding: 8px;
    border: 1px solid #cfcaca;
    border-radius: 5px;
    font-size: 16px;
  }

  .flex-container .email-tel-city {
    gap: 20px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 376px) {
      gap: 20px;
      width: 100%;
    }
  }

  .button-save {
    width: 33%;
    padding: 8px;
    background: #627abd;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    font-weight: 700;
    border: none;

    @media screen and (max-width: 376px) {
      width: 100%;
      padding: 8px;
    }
  }

  .flex-container .ad-img {
    height: 100px;
    width: 100px;
    border-radius: var(--radius-m);
    position: relative;
    margin-bottom: 1rem;
    margin-top: 15px;
    text-align: center;
    @media screen and (max-width: 376px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 55px;
      margin-bottom: 0rem;
    }

    span {
      font-family: var(--main-font-regular);
      font-size: 0.8rem;
      width: 100%;
      text-align: center;
      position: absolute;
      left: 50%;
      bottom: -25px;
      transform: translate(-50%, 0%);
      @media screen and (max-width: 376px) {
        width: 85px;
        bottom: -5px;
      }
    }

    input {
      display: none;
    }
    img {
      width: 64px;
    }
  }
`;

export const SuccesStyled = styled.div`
  color: #24997f;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ErrorStyled = styled.div`
  color: #bc1c47;
  display: flex;
  align-items: center;
  gap: 8px;
`;
