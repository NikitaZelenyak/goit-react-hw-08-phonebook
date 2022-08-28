import styled from "styled-components";


import { NavLink } from "react-router-dom";


export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;


  > nav {
    display: flex;
  }
`;

export const Nav = styled.nav`
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
    

export const Text = styled.p`
font-size: 36px;
  margin: 0;
color: #0444f4;
`

export const Btn = styled.button`
display: inline-block;
margin-left: auto;
    background-color: transparent;
    cursor: pointer;
    border: none;
    color:#f44c04 ;
    padding: 10px;
    font-size: 20px;
    border-radius: 6px;
    &:hover{
        color: white;
        background-color:#0e58eb90 ;
    }
` 
export const Wrapper = styled.div`
display: flex;
    margin-left: auto;
`
export const NameText = styled.p`
    color: #0444f4;
    text-transform: capitalize;
    font-size: 20px;

`
