import styled from 'styled-components';

export const Tooltip = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;

  &&:not(:first-child) {
    margin-top: 5px;
  }
`;
