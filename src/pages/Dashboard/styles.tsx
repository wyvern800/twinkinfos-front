import styled from 'styled-components';

export const OuterWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;

  @media (max-width: 748px) {
    min-width: 100vw;
  }
`;

export const Wrapper = styled.div`
  background-color: rgb(34, 36, 49);
  border-radius: 15px;
  padding: 20px;
  width: 55vw;
  position: relative;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);

  margin-top: 5%;
  margin-bottom: 5%;

  @media (max-width: 748px) {
    width: 100%;
    border-radius: 0;
    margin: 0;

    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
