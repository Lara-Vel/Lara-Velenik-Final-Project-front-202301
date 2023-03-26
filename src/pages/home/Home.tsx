import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../../features/ads/components/cardList/CardList';
import * as FaGithub from 'react-icons/fa';
import * as FaLinkedin from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Encuentra el gato perfecto para ti</h1>
        <div className="article-container">
          <article className="article-text">
            ¿Es posible tener un gato sin sufrir alergias? En realidad, sí. A
            diferencia de lo que se cree, la alergia a los gatos no está causada
            por el pelo del felino si no por el alérgeno Fel d1, que se origina
            en las glándulas sebáceas y en su saliva. Actualmente, existen razas
            de gatos hipoalergénicos que producen poco o nada de esta proteína,
            lo que los convierte en una excelente opción para las personas que
            sufren de alergias a los gatos. Estas razas tienen su genética
            controlada por la reproducción en la cría, lo que permite a las
            personas con alergia disfrutar de su compañía. Sin embargo, es
            importante tener en cuenta que cada cuerpo es diferente y que
            incluso un gato considerado hipoalergénico puede provocar reacciones
            alérgicas en algunas personas. Por lo tanto, es recomendable
            interactuar con un gato hipoalergénico antes de decidir tener uno
            como mascota.¡Así que no te rindas en tu búsqueda de un compañero
            felino!
          </article>
          <div className="image">
            <img src="../assets/images/cat-home.webp" alt="frase" />
          </div>
        </div>
      </div>
      <CardList />
      <div className="footer-container">
        <div className="footer-text">
          <p>Web design & developed by Lara Vel.</p>
          <p> Hypocat - 2023</p>
        </div>
        <div className="footer-link">
          <Link
            to={'https://github.com/Lara-Vel'}
            target={'_blank'}
            rel="noreferrer"
          >
            <FaGithub.FaGithub
              style={{
                color: 'black',
              }}
            />
          </Link>
          <Link
            to={'https://www.linkedin.com/in/lara-vel/'}
            target={'_blank'}
            rel="noreferrer"
          >
            <FaLinkedin.FaLinkedin
              style={{
                color: 'black',
              }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
