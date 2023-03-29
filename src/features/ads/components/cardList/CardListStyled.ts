import styled from 'styled-components';

export const CardListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 340px);
  justify-content: center;
  justify-items: center;
  gap: 80px;
  margin: 0 auto;
  padding-bottom: 50px;
  padding-top: 20px;
`;

export const CardStyled = styled.li`
  list-style: none;
  width: 28%;
  margin: 0;
  padding: 0;
  @media (max-width: 376px) {
    width: 79%;
  }
`;

export const TitleCardStyled = styled.p`
  padding-left: 37px;
  padding-bottom: 40px;
  font-family: var(--main-font-regular);
  font-weight: 700;
  font-size: 1.7rem;
  color: #232323;

  @media (max-width: 376px) {
    padding-left: 40px;
    padding-bottom: 20px;
    font-family: var(--main-font-regular);
    font-weight: 700;
    font-size: 1rem;
    padding-top: 180px;
  }
`;
