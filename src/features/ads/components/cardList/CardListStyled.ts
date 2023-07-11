import styled from 'styled-components';

export const CardListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  gap: 3.5rem;
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 2rem;
  width: 100%;
`;

export const CardStyled = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TitleCardStyled = styled.p`
  padding: 3rem 0 3rem 8rem;
  font-family: var(--main-font-regular);
  font-weight: 700;
  font-size: 2rem;
  color: #232323;

  @media (max-width: 376px) {
    padding: 3rem 0 3rem 3.5rem;
    font-family: var(--main-font-regular);
    font-weight: 700;
    font-size: 1.5rem;
  }
`;
