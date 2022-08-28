import styled from "styled-components";

import { NavLink } from "react-router-dom";



export const LinkCustom = styled( NavLink )`
display: inline-block;
padding: 10px;

text-decoration: none;
color: black;
border: 1px solid black;
border-radius: 6px;
&:hover{
  color: #0961dd;
  border-color: #0961dd;
}
`