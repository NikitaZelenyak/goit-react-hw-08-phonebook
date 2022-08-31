import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Wrapper = styled.div`
margin-left: auto;
margin-right: auto;
height: 100vh;
overflow: scroll;
padding-bottom: 20px;   
`



export const WrapInput = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
`
export const List = styled.ul`

    gap: 10px;
padding-bottom: 80px;

`
export const Link = styled(NavLink)`
    color:  #0444f4;
    display: inline-block;
   margin-left: 50%;
   margin-top: 20px;
`