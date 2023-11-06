import styled from 'styled-components';

export const MainDiv = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const WrapperSearch = styled.div`
  width: 100%;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
