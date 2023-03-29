import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1000px;
  max-height: 1000px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-top: 10px;
    background: -webkit-linear-gradient(
      left,
      #f88db1,
      #e5de45,
      #5996da,
      #9085fb,
      #52ca79
    );
    margin-bottom: 30px;
    font-size: 3rem;
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
      margin: 0px auto;
      text-align: center;
    }
  }

  .detail-container-info {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 90%;
    height: 600px;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 78%;
      margin-top: 20px;
    }
  }

  .detail-img {
    flex: 0 0 57%;
    margin-right: 72px;
    height: 570px;
    width: 523px;
    border-radius: 27px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30px;
    }

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 20px;
      flex: 0 0 auto;
      height: 300px;
      width: 300px;
    }
  }

  .info-line {
    display: flex;
    align-items: baseline;
    margin-bottom: 5px;
    flex-wrap: wrap;
  }
  .info-line p {
    margin-left: 10px;
  }

  .detail-info {
    flex: 0 0 55%;
    font-family: Poppins, sans-serif;
    font-size: 1.1rem;
    line-height: 2.5;

    p {
      margin-top: 0;
      margin-left: 10px;
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
    margin-bottom: 20px;
    color: black;
    font-weight: 400;
  }
`;
