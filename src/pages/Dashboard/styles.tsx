import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgb(34,36,49);
  border-radius: 15px;
  padding: 20px;

  margin: 0;

  // Disable select
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  width: 50vw;

  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);

  @media(max-width: 748px) {
    width: 100%;
    border-radius: 0;
  }
`;
