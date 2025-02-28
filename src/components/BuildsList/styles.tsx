import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgb(34,36,49);
`;

export const Tooltip = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;

  &&:not(:first-child) {
    margin-top: 5px;
  }
`;
