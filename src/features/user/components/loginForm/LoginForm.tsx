import React, { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getNewUserTokenAsync, selectAuthSlice } from '../../user-slice';
import { ErrorStyled, LoginFormStyled, SuccesStyled } from './LoginFormStyled';
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { status, loginMessage, loginStatus } = useAppSelector(selectAuthSlice);

  const formFeedback = () => {
    switch (loginStatus) {
      case 'success':
        return (
          <>
            <SuccesStyled>
              Acceso correcto <FaRegCheckCircle />
            </SuccesStyled>
            <Navigate to={'/app'} />
          </>
        );
      case 'error':
        return (
          <ErrorStyled>
            {loginMessage} <FaRegTimesCircle />
          </ErrorStyled>
        );
      default:
        return;
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(getNewUserTokenAsync(event.currentTarget));
  };

  return (
    <LoginFormStyled>
      <div className="form">
        <div className="title-form">
          <form onSubmit={onSubmit} className="login-form">
            <h2 className="title">Iniciar sesión</h2>
            {status === 'loading' ? (
              <span className="spinner">
                Cargando...
                <img src="/assets/images/spinner.gif" alt="animated gif" />
              </span>
            ) : (
              <>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="imput-email-form"
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  name="password"
                  required
                  className="imput-password-form"
                />
                <button type="submit" className="button-login">
                  Acceder
                </button>
                {formFeedback()}
                <p className="link">
                  ¿No tienes una cuenta?{' '}
                  <a href="/register">Regístrate ahora</a>
                </p>
              </>
            )}
          </form>
        </div>
        <div className="image-form">
          <img
            src="../assets/images/hypocat-bigLogo.webp"
            alt="Logo of Hypocat"
          />
        </div>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
