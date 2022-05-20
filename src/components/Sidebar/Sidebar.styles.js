import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const SidebarContent = styled.div`
    display: none;
    background-color: var(--black);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    top: 0;
    right: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    transition: 0.3s ease-in-out;

    @media only screen and (max-width: 30em) {
        display: block;
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const SideMenuInner = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20rem;
`;

export const SideMenuItem = styled.li`
    margin: 2rem;
`;

export const SideLink = styled(NavLink)`
    text-decoration: none;
    color: var(--white);
    font-size: 2rem;
`

export const CloseSidebar = styled(AiOutlineClose)`
    align-self: flex-end;
    font-size: 3.5rem;
    color: var(--white);
    margin: 2rem;
`;