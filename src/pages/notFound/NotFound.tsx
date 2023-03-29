import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <article className="not-found-container">
      <div className="not-found-elements">
        <h1>¡ACHÚS!, ESTA ZONA ME DA ALERGIA...</h1>
      </div>
      <div className="not-found-image">
        <img
          src="../assets/images/hypocat-bigLogo.webp"
          alt="Hypocat 404 error"
        />
      </div>
      <div className="not-found-link">
        <h2>ERROR 404</h2>
        <p>PÁGINA NO ENCONTRADA</p>
        <Link to={'/app'}>volver a inicio</Link>
      </div>
    </article>
  );
};

export default NotFound;
