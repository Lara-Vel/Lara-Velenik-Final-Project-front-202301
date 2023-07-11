import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CardList from '../../features/ads/components/cardList/CardList';
import { FaLinkedin, FaGithub, FaAngleDown } from 'react-icons/fa';
import './Home.css';

const faqs = [
  {
    id: 1,
    header: 'Alergias a los gatos: Lo que debes saber',
    text: `Las alergias a los gatos no se deben en realidad a una "alergia al gato" en sí, sino a ciertos alérgenos específicos presentes en el gato, como la saliva y otras glándulas, que se depositan en su pelaje. Estas sustancias son principalmente producidas por las glándulas salivales, las glándulas sebáceas y en mayor cantidad por las glándulas perianales, donde están más concentradas.Los principales alérgenos que causan reacciones son el Fel d1 y el Fel d4. También existen alérgenos menores, como el Fel d2, el Fel d3 y el IgA felino. Estas son glicoproteínas y el alérgeno Fel d1 es responsable del 60% de los casos de reacciones alérgicas.
    Estos alérgenos son extremadamente volátiles. No solo se adhieren al pelaje del gato a través de su saliva, sino que también se dispersan en el entorno doméstico, en los tejidos y en los humanos que conviven con gatos. Además, son persistentes en el ambiente, especialmente en la arena para gatos, ya que las glándulas perianales producen una gran cantidad de estos alérgenos que se depositan en las heces.`,
  },
  {
    id: 2,
    header: '¿Es posible tener un gato sin sufrir alergias?',
    text: `En realidad, sí. Actualmente, existen razas de gatos hipoalergénicos que producen poco o nada de la proteína Fel d1, lo que los convierte en una excelente opción para las personas que sufren de alergias a los gatos. Estas razas tienen su genética controlada por la reproducción en la cría, lo que permite a las personas con alergia disfrutar de su compañía. Se sabe que el alérgeno Fel d1 se produce en mayor cantidad en gatos enteros. Se ha observado una correlación entre la producción del alérgeno y las hormonas, por lo que su presencia es menor en gatos y gatas esterilizados. Además, las gatas producen menos cantidad de esta proteína que los machos. Sin embargo, es importante tener en cuenta que cada cuerpo es diferente y que incluso un gato considerado hipoalergénico puede provocar reacciones alérgicas en algunas personas. Por lo tanto, es recomendable interactuar con un gato hipoalergénico antes de decidir tener uno como mascota. ¡Así que no te rindas en tu búsqueda de un compañero felino!`,
  },
  {
    id: 3,
    header: 'Consejos para reducir el riesgo de alergia',
    text: `Hay algunas medidas que puede tomar para reducir el riesgo de alergias. En primer lugar, evite la acumulación de alérgenos manteniendo una limpieza regular en el hogar. Esto implica quitar a menudo el polvo de la casa, quizás no hacerlo nosotros sino que lo haga otra persona, fregar los suelos a menudo y la ventilación adecuada abriendo las ventanas para permitir que el polvo salga de la casa. Otra medida muy importante es no dejar que el gato deambule por toda la casa, sino hacer que una habitación esté vetada, siendo la más importante el dormitorio, donde de otro modo pasaríamos varias horas respirando alérgenos. Considere también la posibilidad de utilizar mantas o fundas lavables en la cama o los muebles donde al gato le gusta descansar. Incluso si tenemos un estudio, sería importante no dejarle entrar, para tener una habitación en la que podamos "recuperarnos" en caso de que un día las reacciones alérgicas sean especialmente fuertes. Considere la posibilidad de utilizar dispositivos de purificación del aire en su casa. Estos dispositivos pueden ayudar a eliminar los alérgenos del aire, reduciendo así la exposición a los alérgenos de los gatos. `,
  },
  {
    id: 4,
    header: '¿Qué tratamientos o remedios existen?',
    text: `Para las alergias, existe una especie de "vacuna", que consiste en permanecer en contacto con la sustancia poco a poco, aumentando la exposición. Para el tratamiento propiamente dicho, se suelen utilizar antihistamínicos.Los más comunes son la cetirizina (Zirtec), la loratadina (Clarytin) o la desloratadina (Aerius), que actúan del mismo modo que para otras alergias del aparato respiratorio. Un remedio útil recomendado para la alergia al pelo de gato es Allerpet, un producto para frotar sobre el pelo del gato que reduce significativamente la presencia del alérgeno, ayudando a los alérgicos a mantener a raya sus síntomas. Puede pasar Allerpet sobre el pelo del gato con un paño húmedo, cepillándolo con un peine de púas finas para eliminar el pelo muerto. Repetir el tratamiento una vez a la semana puede evitar la mayoría de las reacciones alérgicas. Por último, y quizás lo más importante de todo, consulte a un médico especializado en alergias: el alergólogo. De hecho, parece desprenderse de estudios recientes que es posible reducir las reacciones alérgicas a un alérgeno a través de pequeños contactos prolongados, pero para más información, debe consultar a un médico, que también podrá indicarle los medicamentos que debe tomar si las reacciones, de vez en cuando, son especialmente graves.
`,
  },
];
type AccordionItemProps = {
  handleToggle: (id: number) => void;
  active: number | null;
  faq: {
    id: number;
    header: string;
    text: string;
  };
};

const AccordionItem = (props: AccordionItemProps) => {
  const contentElement = useRef<HTMLDivElement>(null);
  const { handleToggle, active, faq } = props;
  const { id, header, text } = faq;

  return (
    <div className="rc-accordion-card">
      <header
        className={active === id ? 'active' : ''}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <span className="material-symbols-outlined">
          <FaAngleDown />
        </span>
      </header>
      <div
        ref={contentElement}
        className={`collapse ${active === id ? 'show' : ''}`}
        style={
          active === id
            ? { height: contentElement?.current?.scrollHeight! }
            : { height: '0px' }
        }
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <>
      <header className="home-container">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Bienvenido</span>
            <span className="heading-primary-main">a</span>
            <span className="heading-primary-main">Hypocat</span>
            <br />
            <span className="heading-primary-sub">Encuentra el gato</span>
            <span className="heading-primary-sub">perfecto para ti</span>
          </h1>
        </div>
        <div className="article-container"></div>
      </header>
      <div className="card-container">
        <article>
          {faqs.map((faq, index) => {
            return (
              <AccordionItem
                key={index}
                active={active}
                handleToggle={handleToggle}
                faq={faq}
              />
            );
          })}
        </article>
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
            <FaGithub
              style={{
                color: 'black',
              }}
              title="github"
            />
          </Link>
          <Link
            to={'https://www.linkedin.com/in/lara-vel/'}
            target={'_blank'}
            rel="noreferrer"
          >
            <FaLinkedin
              style={{
                color: 'black',
              }}
              title="linkedin"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
