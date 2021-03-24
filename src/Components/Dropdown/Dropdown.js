import React from 'react';
import { menuData } from '../../Data/MenuData';
import { Button } from '../Button/Button';
import { DropdownContainer, BtnWrap, CloseIcon, DropdownLink, DropdownMenu, DropdownWrapper, Icon } from './dropdownStyle'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>

                <DropdownMenu>
                    {
                        menuData.map((item, index) => (
                            <DropdownLink to={item.link} key={index}>
                                {item.title}
                            </DropdownLink>
                        ))
                    }
                </DropdownMenu>

                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/content">
                        Contact Us
                    </Button>
                </BtnWrap>

            </DropdownWrapper>

        </DropdownContainer>
    )
}

export default Dropdown;
