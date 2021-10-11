import styled from "styled-components";
export const Button = styled.button`
   transition: opacity 0.1s ease-in-out;
   opacity: 1;
   &:hover {
      opacity: 0.8;
   }
   &:active {
      opacity: 0.9;
   }
`;