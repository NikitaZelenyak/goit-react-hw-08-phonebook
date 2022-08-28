
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Link = styled(NavLink)`
color: black;

`


export const RegistrationLink = () => {
    return (
        <Link to='/register'>Don't have an account? Sign Up</Link>
    )
}