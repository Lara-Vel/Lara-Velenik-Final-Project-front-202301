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
    padding: 25px 40px 0 55px;
    margin: 0;
  }

  .flex-container {
    display: flex;
    margin-top: 4rem;
    width: 100%;
    gap: 2.5rem;
    margin-bottom: 12rem;
    @media screen and (max-width: 376px) {
      margin-top: 1.5rem;
      flex-direction: column;
      margin-bottom: 21rem;
      gap: 2.5rem;
    }
  }

  h1 {
    width: 100%;
    font-family: var(--main-font-regular);
    font-size: 1.3rem;
    @media screen and (max-width: 376px) {
      font-size: 1.1rem;
    }
  }

  div {
    width: 33%;
    height: 2rem;
    margin-bottom: 1rem;
  }

  .flex-container .name-surname-breed {
    gap: 20px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 376px) {
      flex-direction: column;
      gap: 8px;
      margin-bottom: 61px;
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
      gap: 8px;
      display: flex;
      flex-direction: column;
    }
  }

  .button-save {
    height: 10%;
    padding: 8px;
    background: #627abd;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    font-weight: 700;
    border: none;
    width: 33%;
  }

  .flex-container .ad-img {
    height: 100px;
    width: 100px;
    border-radius: var(--radius-m);
    position: relative;
    margin-bottom: 1rem;
    margin-left: 65px;
    margin-top: 15px;
    @media screen and (max-width: 376px) {
      width: 60px;
      height: 60px;
      margin-left: 103px;
      margin-top: 48px;
      margin-bottom: 0;
    }

    span {
      font-family: var(--main-font-regular);
      font-size: 0.8rem;
      width: 100%;
      width: 60px;
      text-align: center;
      position: absolute;
      left: 50%;
      bottom: -25px;
      transform: translate(-50%, 0%);
      @media screen and (max-width: 376px) {
        width: 85px;
      }
    }

    input {
      visibility: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius-m);
      border: none;
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
