import styled from 'styled-components';

export const Tooltip = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;

  &&:not(:first-child) {
    margin-top: 5px;
  }
`;
