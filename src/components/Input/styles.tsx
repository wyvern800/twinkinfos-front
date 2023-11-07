import styled from 'styled-components';

export const MainDiv = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .customName > div > div> ul > li {
    cursor: pointer;
    div > span:hover {
      color: white;
    }

    &&:disabled {
      pointer-events: none;
    }
  }
`;

export const WrapperSearch = styled.div`
  width: 100%;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
