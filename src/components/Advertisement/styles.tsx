import styled, { css } from 'styled-components';

type AdvertiseProps = {
  left?: string;
  right?: string;
  loading?: boolean;
  horizontal?: boolean;
};

export const Advertise = styled.div<AdvertiseProps>`
  min-height: 10vh;
  width: 55vw;
  border: 1px dashed #36384A;
  background-color: #222431;
  color: #36384A;
  display: flex;
  justify-content: center;
  align-items: center;

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
