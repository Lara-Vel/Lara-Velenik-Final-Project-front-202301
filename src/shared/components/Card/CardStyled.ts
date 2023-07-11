import styled from 'styled-components';

export const ContainerCard = styled.figure`
  position: relative;
  overflow: hidden;
  width: 30rem;
  height: 30rem;
  border-radius: 1rem;
  background: linear-gradient(45deg, #22682a 0%, #9b4a1b 40%, #3a342a 100%);

  @media (max-width: 376px) {
    width: 28.5rem;
    height: 28.5rem;
  }
  @media (min-width: 320px) and (max-width: 375px) {
    width: 24.5rem;
    height: 24.5rem;
  }

  img {
    min-height: 100%;
    max-width: 115%;
    object-fit: cover;
    opacity: 0.9;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(1, 1);

    :hover {
      opacity: 0.4;
      transform: scale(1.2, 1.2);
    }
  }

  .card-figcaption {
    font-family: var(--main-font-regular);
    padding: 1.5em;
    color: #fff;
    background-color: rgba(58, 52, 42, 0.4);
    font-size: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: background-color 0.35s;
    font-family: var(--main-font-regular);

    @media (max-width: 376px) {
      font-size: 1.7rem;
    }

    :hover {
      background-color: rgba(58, 52, 42, 0);
      h2 {
        transform: translateY(0);
      }
    }

    ::before {
      opacity: 0;
      transition: opacity 0.35s, transform 0.35s;
      transform: scale(0);
    }
  }

  .textcaption {
    ::before {
      position: absolute;
      top: 3rem;
      right: 3rem;
      left: 3rem;
      bottom: 3rem;
      border: 0.1rem solid;
      content: '';
      backdrop-filter: blur(1rem) saturate(100%);
    }

    h2 {
      margin: 25% -3.6rem 1rem -3.6rem;
      transition: transform 0.35s;
      transform: translateY(100%);
      text-align: center;
    }

    p,
    ::before {
      opacity: 0;
      transition: opacity 0.35s, transform 0.35s;
      transform: scale(0);
      text-align: center;
    }
  }

  :hover p,
  :hover .textcaption::before {
    opacity: 1;
    transform: scale(1);
  }
`;
