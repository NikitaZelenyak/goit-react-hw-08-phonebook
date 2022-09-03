import styled from "styled-components";
import  { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
 0% {
        opacity: 0
    }

    100% {
        opacity: 1;
    }
`


export const Title = styled.h1`
text-align: center;

  font-size: 4vw;
color: #0444f4;
  animation-name: ${breatheAnimation};
animation-duration: 2.5s;
animation-iteration-count: linear forwards;
 text-shadow: 25px 25px 7px rgba(150, 150, 150, 1);
 margin: 0;

`