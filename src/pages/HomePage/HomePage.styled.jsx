import styled from "styled-components";
import { NavLink } from "react-router-dom";
import  { keyframes } from 'styled-components';



const breatheAnimation = keyframes`
 0% {
        opacity: 0
    }

    100% {
        opacity: 1;
    }
`


export const Section = styled.section`
position: relative;

`

export const Text = styled.p`
font-size: 24px;
  margin: 0;
color: #0444f4;
`


export const Title = styled.h1`

 
 font-size: 10vw;
color: #0444f4;
  text-shadow: 4px 4px 0px #010c17;
  mix-blend-mode: screen;
  animation-name: ${breatheAnimation};
animation-duration: 2.5s;
animation-iteration-count: linear forwards;
 text-shadow: 25px 25px 7px rgba(150, 150, 150, 1);

`

export const List = styled.ul`
display: flex;
flex-direction: column;
`

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: #093d9d;
  &.active {
    color: white;
    background-color: #0444f4;
  }
  :hover:not(.active){
    background-color: #0e58eb90;
     color: white;
  }
`;
    



