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

export const Overlay=styled.div`
     position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`

export const ModalBox =styled.div`
     max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`






