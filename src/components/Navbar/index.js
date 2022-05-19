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
    NavItemResume
} from './Navbar.styles';
import Resume from '../../assets/resume.pdf';

const Navbar = () => {

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
                </NavItem>
            </Nav>
        </NavContainer>
    )
}

export default Navbar;