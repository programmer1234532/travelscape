import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../gloablStyles';
import {
    Nav,
    NavBarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
} from './NavBar.elements';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavBarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            TRAVELSCAPE
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/services">Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/products">Products</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary> SIGN UP </Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button fontBig primary>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default NavBar;
