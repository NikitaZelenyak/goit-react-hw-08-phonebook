import styled from "styled-components";


import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
 display: flex;
 align-items: center;
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