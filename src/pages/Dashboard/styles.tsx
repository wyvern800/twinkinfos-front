import styled, { css } from 'styled-components';

export const OuterWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  flex-direction: row;
  width: 99vw;

  @media (max-width: 748px) {
    min-width: 100vw;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
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

type AdvertiseProps = {
  left?: string;
  right?: string;
  loading?: boolean;
  horizontal?: boolean;
};
export const Advertise = styled.div<AdvertiseProps>`
  min-height: 10vh;
  width: 55vw;
  border: 1px solid red;

  ${({ left }) =>
    left &&
    css`
      position: fixed;
      left: ${left};
      min-height: 50vh;
      width: 10vw;

      @media (max-width: 1250px) {
        display: none;
      }
    `}

  ${({ right }) =>
    right &&
    css`
      position: fixed;
      right: ${right};
      min-height: 50vh;
      width: 10vw;

      @media (max-width: 1250px) {
        display: none;
      }
    `}

  ${({ loading }) =>
    loading &&
    css`
      display: none;

      @media (max-width: 1250px) {
        display: none;
      }
    `}

    ${({ horizontal }) =>
    horizontal &&
    css`
      min-height: 10vh;
      width: 55vw;

      @media (min-width: 1250px) {
        display: none;
      }
    `}
`;
