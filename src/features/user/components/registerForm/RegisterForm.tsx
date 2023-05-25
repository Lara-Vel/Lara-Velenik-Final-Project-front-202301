import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { registerNewUserTokenAsync, selectAuthSlice } from '../../user-slice';
import { ErrorStyled, SuccesStyled } from '../loginForm/LoginFormStyled';
import { Navigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { RegisterFormStyled } from './RegisterFormStyled';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { status, registerMessage, registerStatus } =
    useAppSelector(selectAuthSlice);

  const registerFormFeedback = () => {
    switch (registerStatus) {
      case 'success':
        return (
          <>
            <SuccesStyled>
              Registro completado
              <FaRegCheckCircle />
            </SuccesStyled>
            <Navigate to={'/'} />
          </>
        );
      case 'error':
        return (
          <ErrorStyled>
            {registerMessage} <FaRegTimesCircle />
          </ErrorStyled>
        );
      default:
        return;
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(registerNewUserTokenAsync(event.currentTarget));
  };

  return (
    <RegisterFormStyled>
      <div className="form">
        <div className="title-form">
          <form onSubmit={onSubmit} className="register-form">
            <h2 className="title">Registro de usuario</h2>
            {status === 'loading' ? (
              <span className="spinner">
                Cargando...
                <img src="/assets/images/spinner.gif" alt="animated gif" />
              </span>
            ) : (
              <>
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  name="name"
                  required
                  className="imput-name-form"
                />
                <input
                  type="text"
                  id="surname"
                  placeholder="Apellido"
                  name="surname"
                  required
                  className="imput-surname-form"
                />
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
                <button type="submit" className="button-register">
                  Crea tu cuenta
                </button>
                {registerFormFeedback()}
                <p className="link">
                  ¿Ya tienes una cuenta? <a href="/">Inicia sesión</a>
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
    </RegisterFormStyled>
  );
};

export default RegisterForm;
