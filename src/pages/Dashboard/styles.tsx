import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgb(34,36,49);
  border-radius: 15px;
  padding: 20px;


  width: 55vw;

  margin: 50px auto;

  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);


  @media(max-width: 748px) {
    width: 100%;
    border-radius: 0;
    margin-top: 0;
  }
`;
