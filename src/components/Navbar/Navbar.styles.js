import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';

export const NavContainer = styled.div`
   padding: 2rem;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`;

export const NavLogo = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--white);

    @media only screen and (max-width: 30em) {
        display: none;
    }
`

export const NavLogoTitle = styled.span`
    color: var(--slate);
`

export const NavAG = styled.span`
    display: none;
    font-size: 3rem;
    font-weight: 700;
    color: var(--white);

    @media only screen and (max-width: 30em) {
        display: block;
    }
`

export const NavItem = styled.div`
    align-self: center;
`;

export const NavList = styled.ul`
    display: flex;
    list-style-type: none;
`

export const NavListItem = styled.li`
    color: var(--white);
    
    &:not(:last-child) {
        margin-right: 2rem;
    }

    @media only screen and (max-width: 30em) {
        display: none;
    }
 `

export const NavItemLink = styled(NavLink)`
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--white);
    text-decoration: none;
    padding-bottom: 0.2rem;

    &.active {
        border-bottom: 0.3rem solid var(--slate);
    }
`

export const NavItemResume = styled.a`
    display: inline-block;
    font-size: 1.5rem;
    text-decoration: none;
    margin-top: 0.1rem;
    padding: 0.1rem 1.7rem;
    border: 0.1rem solid var(--slate);
    border-radius: 0.3rem;
    &:visited {
        color: var(--white);
    }
`;

export const NavMenu = styled(BiMenuAltRight)`
    display: none;
    font-size: 5rem;
    color: var(--slate);

    @media only screen and (max-width: 30em) {
        display: block;
    }
`;