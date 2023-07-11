import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5rem;
  max-width: 100rem;
  max-height: 100rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-top: 1rem;
    background: -webkit-linear-gradient(
      left,
      #f88db1,
      #e5de45,
      #5996da,
      #9085fb,
      #52ca79
    );
    margin-bottom: 3rem;
    font-size: 4rem;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: tomato;
    letter-spacing: 0.05em;
    font-weight: 500;
    font-family: Poppins, sans-serif;
    text-rendering: optimizeSpeed;
    line-height: 1.2;
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 2rem;
      margin: 0 auto;
      text-align: center;
    }
  }

  .detail-container-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* width: 90%; */
    /* height: 60rem; */

    @media (max-width: 768px) {
      flex-direction: column;
      width: 78%;
      margin-top: 2rem;
    }
  }

  .detail-img {
    flex: 0 0 50%;
    margin-right: 7rem;
    height: 51.7rem;
    width: 5.23rem;
    border-radius: 2.7rem;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 3rem;
    }

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 2rem;
      flex: 0 0 auto;
      height: 30rem;
      width: 30rem;
    }
  }

  .info-line {
    display: flex;
    align-items: baseline;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
  }
  .info-line p {
    margin-left: 1rem;
  }

  .detail-info {
    flex: 0 0 43%;
    font-family: Poppins, sans-serif;
    font-size: 1.5rem;
    line-height: 2.5;

    p {
      margin-top: 0;
      margin-left: 1rem;
    }

    @media (max-width: 768px) {
      flex: 0 0 auto;
      text-align: center;
      font-size: 1rem;
      line-height: 2.2rem;
    }
  }

  .detail-info .info-line-nature {
    font-weight: 600;
    color: royalblue;
  }

  .detail-info p:last-child {
    margin-bottom: 2rem;
    color: black;
    font-weight: 400;
  }
`;
