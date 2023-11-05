import styled from 'styled-components';

export const MainDiv = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  min-width: 100%;
  width: 100%;
`;

export const WrapperSearch = styled.div`
  width: 100%;
  margin-top: 10px;
  min-width: 100%;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
