import styled from "styled-components";

import leftIcon from "../assets/left.png";
import rightIcon from "../assets/right.png";

export default styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   > button {
      margin: 0 15px;
      padding: 0 0 1px 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border: 1px solid var(--lightgray);
      border-radius: 5px;
      background: var(--white);
      transition: 0.1s ease-in-out;
      &::after {
         content: "";
         display: inline-block;
         width: 6px;
         height: 10px;
         background-image: url(${leftIcon});
         background-size: 100% 100%;
      }
      &:last-child::after {
         background-image: url(${rightIcon});
      }
      &:hover {
         background: var(--white);
      }
   }
   ol {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      li {
         margin: 0 15px;
         padding: 3px 5px;
         color: var(--sixgray);
         font-size: 0.9em;
         cursor: pointer;
         &.active {
            color: var(--main);
            font-weight: 700;
         }
      }
   }
`;