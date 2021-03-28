import React, { useState } from 'react';
import { menuData } from '../../Data/MenuData';
import { Button } from '../Button/Button';
import { Nav, Logo, NavManu, MenuBars, NavManuLinks, NavBtn, HomeIcon } from './NavbarStyle';

const Navbar = ({ toggle }) => {

    const [navbar, setNavbar] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80 || window.location.pathname !== "/") {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNav);
    window.addEventListener('click', changeNav);

    return (
        <Nav background={navbar}>
            <Logo to="/"><HomeIcon />XAmmar</Logo>
            <MenuBars onClick={toggle} />
            <NavManu>
                {menuData.map((item, index) => (
                    <NavManuLinks
                        to={item.link}
                        key={index}
                    >
                        {item.title}
                    </NavManuLinks>
                ))}
            </NavManu>

            <NavBtn>
                <Button to="/contact" primary="true" >
                    Contact Us
                </Button>
            </NavBtn>

        </Nav>
    )
}

export default Navbar
