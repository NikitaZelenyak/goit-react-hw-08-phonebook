
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;

  border-bottom: 1px solid #021f70;


`;

export const Text = styled.p`
font-size: 36px;
  margin: 0;
color: #0444f4;
`

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: #093d9d;
  font-size: 24px;
  &.active {
    color: white;
    background-color: #0444f4;
  }
  :hover:not(.active){
    background-color: #0e58eb90;
     color: white;
  }
`;