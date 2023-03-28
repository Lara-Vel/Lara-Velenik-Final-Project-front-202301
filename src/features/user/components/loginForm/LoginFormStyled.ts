import styled from 'styled-components';

export const LoginFormStyled = styled.div`
  .form {
    height: 100%;
    display: flex;
    justify-content: space-between;
    color: #7f7e84;
    font-family: var(--main-font-regular);
    background-color: #fffcfa;
  }

  .title-form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    font-family: var(--main-font-regular);
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
    gap: 2.5rem;
  }

  .login-form input {
    min-width: 50px;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    border-color: #cfcaca;
  }
  .login-form input::placeholder {
    color: #cfcaca;
  }

  .title {
    display: flex;
    width: 100%;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .image-form {
    background-color: #fff7eb;
    width: 720px;
    height: 900px;
  }

  .image-form img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .button-login {
    padding: 1rem;
    background: #627abd;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    font-weight: 700;
    border: none;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    .form {
      flex-direction: column-reverse;
      align-items: center;
      display: flex;
    }

    .login-form {
      width: 95%;
      gap: 1rem;
      margin-top: 1rem;
    }

    .title-form {
      width: 95%;
      padding: 2rem 0;
    }

    .image-form {
      width: 400px;
      height: 310px;
    }

    .image-form img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .title {
      font-size: 20px;
    }

    .login-form input {
      min-width: 30px;
      font-size: 16px;
      padding: 7px;
    }

    .button-login {
      padding: 0.6rem;
    }
  }

  .spinner {
    color: #627abd;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 60px;
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
