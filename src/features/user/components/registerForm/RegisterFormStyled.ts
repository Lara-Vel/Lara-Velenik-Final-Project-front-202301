import styled from 'styled-components';

export const RegisterFormStyled = styled.div`
  .form {
    height: 100%;
    display: flex;
    justify-content: space-between;
    color: #7f7e84;
    font-family: var(--main-font-regular);
  }

  .title-form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-family: var(--main-font-regular);
  }

  .register-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 338px;
    gap: 1rem;
    margin-top: 1rem;
  }

  .register-form input {
    min-width: 50px;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    border-color: #cfcaca;
  }
  .register-form input::placeholder {
    color: #cfcaca;
  }

  .title {
    display: flex;
    width: 100%;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .image-form {
    background-color: #fff1ef;
    width: 100%;
    height: 100vh;
  }

  .image-form img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-position: center;
  }

  .button-register {
    padding: 0.8rem;
    background: #627abd;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    font-weight: 700;
    border: none;
    margin-bottom: 1.5rem;
  }
  .link {
    color: #989898;
    font-size: 14px;
    text-align: center;
  }

  .link a {
    color: #627abd;
    text-decoration: none;
  }

  @media screen and (min-width: 375px) and (max-width: 992px) {
    .form {
      flex-direction: column-reverse;
      align-items: center;
      display: flex;
    }

    .register-form {
      width: 338px;
      gap: 1rem;
      margin-top: 1rem;
    }

    .title-form {
      width: 95%;
      padding: 2rem 0;
    }

    .image-form {
      width: 100%;
      height: 320px;
    }

    .image-form img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      background-position: center;
    }

    .title {
      font-size: 20px;
    }

    .register-form input {
      min-width: 30px;
      font-size: 16px;
      padding: 7px;
    }

    .button-register {
      padding: 0.6rem;
    }
    .link {
      margin-top: 1rem;
    }
  }

  .spinner {
    color: #7f7e84;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 60px;
    width: 33%;
  }

  .spinner img {
    height: 20px;
  }

  @media screen and (min-width: 320px) and (max-width: 375px) {
    .form {
      flex-direction: column-reverse;
      align-items: center;
      display: flex;
    }

    .register-form {
      width: 290px;
      gap: 1rem;
      margin-top: 1rem;
    }

    .title-form {
      width: 95%;
      padding: 2rem 0;
    }

    .image-form {
      width: 100%;
      height: 320px;
    }

    .image-form img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      background-position: center;
    }

    .title {
      font-size: 20px;
    }

    .register-form input {
      min-width: 30px;
      font-size: 16px;
      padding: 7px;
    }

    .button-register {
      padding: 0.6rem;
    }
    .link {
      margin-top: 1rem;
    }
  }
`;

export const SuccesStyled = styled.div`
  color: #24997f;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const ErrorStyled = styled.div`
  color: #bc1c47;
  display: flex;
  align-items: center;
  gap: 8px;
`;
