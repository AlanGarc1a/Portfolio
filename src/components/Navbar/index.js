import React from 'react'
import {
    Nav,
    NavContainer,
    NavItem,
    NavItemLink,
    NavList,
    NavListItem,
    NavLogo,
    NavLogoTitle,
    NavItemResume,
    NavAG,
    NavMenu
} from './Navbar.styles';
import Resume from '../../assets/resume.pdf';

const Navbar = ({ toggle }) => {

    const navlinks = [
        { url: '/', title: 'Home' },
        { url: '/about', title: 'About' },
        { url: '/projects', title: 'Projects' },
        { url: '/contact', title: 'Contact' }
    ];

    return (
        <NavContainer>
            <Nav>
                <NavLogo>
                    <NavLogoTitle>Alan </NavLogoTitle>
                    Garcia
                </NavLogo>
                <NavAG>
                    <NavLogoTitle>A</NavLogoTitle>
                    G
                </NavAG>
                <NavItem>
                    <NavList>
                        {navlinks.map(link => {
                            return (
                                <NavListItem>
                                    <NavItemLink to={link.url}>{link.title}</NavItemLink>
                                </NavListItem>
                            )
                        })}
                        <NavListItem>
                            <NavItemResume href={Resume} target="_blank">Resume</NavItemResume>
                        </NavListItem>
                    </NavList>
                    <NavMenu onClick={toggle} />
                </NavItem>
            </Nav>
        </NavContainer>
    )
}

export default Navbar;