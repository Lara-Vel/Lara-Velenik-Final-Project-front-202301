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
    width: 33.8rem;
    gap: 1rem;
    margin-top: 1rem;
  }

  .register-form input {
    min-width: 5rem;
    font-size: 1.6rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border-color: #cfcaca;
  }
  .register-form input::placeholder {
    color: #cfcaca;
  }

  .title {
    display: flex;
    width: 100%;
    font-size: 2.4rem;
    margin-bottom: 2rem;
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
    font-size: 1.6rem;
    border-radius: 0.5rem;
    font-weight: 700;
    border: none;
    margin-bottom: 1.5rem;
    transition: all 0.2s;
  }

  .button-register:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  .button-register:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  .link {
    color: #989898;
    font-size: 1.4rem;
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
      width: 33.8rem;
      gap: 1rem;
      margin-top: 1rem;
    }

    .title-form {
      width: 95%;
      padding: 2rem 0;
    }

    .image-form {
      width: 100%;
      height: 32rem;
    }

    .image-form img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      background-position: center;
    }

    .title {
      font-size: 2rem;
    }

    .register-form input {
      min-width: 3rem;
      font-size: 1.6rem;
      padding: 0.7rem;
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
    gap: 0.8rem;
    height: 6rem;
    width: 33%;
  }

  .spinner img {
    height: 2rem;
  }

  @media screen and (min-width: 320px) and (max-width: 375px) {
    .form {
      flex-direction: column-reverse;
      align-items: center;
      display: flex;
    }

    .register-form {
      width: 29rem;
      gap: 1rem;
      margin-top: 1rem;
    }

    .title-form {
      width: 95%;
      padding: 2rem 0;
    }

    .image-form {
      width: 100%;
      height: 32rem;
    }

    .image-form img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      background-position: center;
    }

    .title {
      font-size: 2rem;
    }

    .register-form input {
      min-width: 3rem;
      font-size: 1.6rem;
      padding: 0.7rem;
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
  gap: 0.8rem;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const ErrorStyled = styled.div`
  color: #bc1c47;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
