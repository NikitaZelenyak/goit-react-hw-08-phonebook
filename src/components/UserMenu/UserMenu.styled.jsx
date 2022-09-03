import styled from "styled-components";


import { NavLink } from "react-router-dom";




export const Nav = styled.nav`
 display: flex;
margin-left: auto;
margin-right: auto;
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
    


export const Btn = styled.button`
display: inline-block;
margin-left: auto;
    background-color: transparent;
    cursor: pointer;
    border: none;
    color: #093d9d;
    padding: 10px;
    font-size: 20px;
    border-radius: 6px;
    &:hover{
        color: #ec3030;
        background-color:#0e58eb90 ;
    }
` 
export const Wrapper = styled.div`
display: flex;
align-items: center;
   
`
export const NameText = styled.p`
 color: #093d9d;
    text-transform: capitalize;
    margin: 0px;
    font-size: 20px;
    margin-right: 20px;
    margin-left: 5px;


`
