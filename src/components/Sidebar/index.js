import React from 'react'
import { TransparentButton } from '../Button';
import {
    Menu,
    CloseSidebar,
    SidebarContent,
    SideLink,
    SideMenuInner,
    SideMenuItem
} from './Sidebar.styles'
import Resume from '../../assets/resume.pdf';

const Sidebar = ({ isOpen, toggle }) => {

    const navlinks = [
        { url: '/', title: 'Home' },
        { url: '/about', title: 'About' },
        { url: '/projects', title: 'Projects' },
        { url: '/contact', title: 'Contact' }
    ];

    return (
        <SidebarContent isOpen={isOpen}>
            <Menu>
                <CloseSidebar onClick={toggle} />
            </Menu>
            <SideMenuInner>
                {
                    navlinks.map(link => {
                        return (
                            <SideMenuItem onClick={toggle}>
                                <SideLink to={link.url}>
                                    {link.title}
                                </SideLink>
                            </SideMenuItem>
                        )
                    })
                }
                <TransparentButton href={Resume}>Resume</TransparentButton>
            </SideMenuInner>
        </SidebarContent>
    )
}

export default Sidebar;