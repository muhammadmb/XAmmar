import React from 'react';
import { menuData } from '../../Data/MenuData';
import { Button } from '../Button/Button';
import { Nav, Logo, NavManu, MenuBars, NavManuLinks, NavBtn, HomeIcon } from './NavbarStyle';


const Navbar = () => {
    return (
        <Nav>
            <Logo to="/"><HomeIcon />XAmmar</Logo>
            <MenuBars />
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
