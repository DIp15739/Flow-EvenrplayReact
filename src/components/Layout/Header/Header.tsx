import { useState } from 'react';
import {Navbar, Nav, NavDropdown, Dropdown, FormControl, Form} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import CompanyLogo from "../../../assets/images/header/everplayLogo.png";
import Menu from "../../../assets/images/header/menu.png";
import ButtonOutline from '../../Common/ButtonOutline/ButtonOutline';
import ButtonFill from '../../Common/ButtonFill/ButtonFill';
import Input from '../../Common/Input/Input';
import HeaderMenu from './HeaderMenu';
import userProfile from "./../../../assets/images/profile/03.jpg";
import "./HeaderStyle.scss";

export interface Props {
    withoutLogin? : any;
    withLogin? : any;
}

const Header = ({withoutLogin, withLogin}: Props) =>{
    const [search, setSearch] = useState('');
    const [navbarMain, setNavbar] = useState(false);
    const changeBackground = () =>{
        if(window.scrollY >= 80){
            setNavbar(true)
        } else{
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);
    return(
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" className={navbarMain ? 'navbarMain active' : 'navbarMain' } >
                <Navbar.Brand href="#home">
                    <img src={CompanyLogo} alt="companyLogo"/>
                    <Form className="responsiveSearch">
                        <Input type="search" value={search} onChange={setSearch} placeholder="Type Something" />
                    </Form>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" >
                    <img src={Menu} alt="menuBarIcon"/>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <HeaderMenu />
                    {withoutLogin &&
                    <Nav>
                        <ButtonOutline text="Connect a Wallet" />
                        <ButtonFill text="Login" />
                    </Nav>
                    }
                    {withLogin &&
                    <Nav>
                        <ButtonFill text="Create NFT" />
                        <img src={userProfile} className="userProfile"/>
                        <Dropdown align="end" className="profileDropdown">
                            <Dropdown.Toggle id="dropdown-basic"><i className="fas fa-angle-down"></i></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className="userName" >Mike Wazowski</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-4">Log Out</Dropdown.Item>
                                <ButtonOutline text="Wallet Connected" />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>

            <svg display="none">
                <symbol width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"id="home">
                <g clip-path="url(#clip0)"><path d="M19.4608 8.69904C19.4603 8.69858 19.4599 8.69812 19.4594 8.69766L11.301 0.539551C10.9532 0.19165 10.4909 0 9.9991 0C9.50731 0 9.04497 0.191498 8.69707 0.539398L0.542928 8.69339C0.540181 8.69614 0.537435 8.69904 0.534688 8.70178C-0.179423 9.42001 -0.178202 10.5853 0.538198 11.3017C0.865499 11.6292 1.29778 11.8188 1.75997 11.8387C1.77874 11.8405 1.79766 11.8414 1.81673 11.8414H2.1419V17.8453C2.1419 19.0334 3.10854 20 4.29689 20H7.48873C7.81221 20 8.07466 19.7377 8.07466 19.4141V14.707C8.07466 14.1649 8.51564 13.7239 9.05779 13.7239H10.9404C11.4826 13.7239 11.9235 14.1649 11.9235 14.707V19.4141C11.9235 19.7377 12.1858 20 12.5095 20H15.7013C16.8897 20 17.8563 19.0334 17.8563 17.8453V11.8414H18.1578C18.6495 11.8414 19.1118 11.6499 19.4599 11.302C20.177 10.5844 20.1773 9.41711 19.4608 8.69904Z" fill="white"/></g>
                <defs><clipPath id="clip0"><rect width="20" height="20" fill="white"/></clipPath></defs>
                </symbol>
                <symbol width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="marketplace">
                <g clip-path="url(#clip0)"><path d="M15.9092 15.8334H8.41417C7.33333 15.8334 6.375 15.1242 6.0825 14.1084L3.54917 5.52421C3.45917 5.21337 3.16 5.00004 2.81833 5.00004H0.833333C0.3725 5.00004 0 4.62671 0 4.16671C0 3.70671 0.3725 3.33337 0.833333 3.33337H2.81833C3.89917 3.33337 4.85667 4.04254 5.14917 5.05837L5.62333 6.66671H18.3692C18.8892 6.66671 19.3825 6.91421 19.6883 7.32921C19.9917 7.74087 20.0792 8.25587 19.9283 8.74254L18.2092 14.1992C17.8725 15.1842 16.95 15.8334 15.9092 15.8334ZM18.37 8.33337H18.3783H18.37Z" fill="white"/>
                <path d="M9.16666 20C8.2475 20 7.5 19.2525 7.5 18.3333C7.5 17.4141 8.2475 16.6666 9.16666 16.6666C10.0858 16.6666 10.8333 17.4141 10.8333 18.3333C10.8333 19.2525 10.0858 20 9.16666 20ZM9.16666 18.3325V18.3333V18.3325Z" fill="white"/>
                <path d="M15.0006 20C14.0815 20 13.334 19.2525 13.334 18.3333C13.334 17.4141 14.0815 16.6666 15.0006 16.6666C15.9198 16.6666 16.6673 17.4141 16.6673 18.3333C16.6673 19.2525 15.9198 20 15.0006 20ZM15.0006 18.3325V18.3333V18.3325Z" fill="white"/>
                </g>
                <defs><clipPath id="clip0"><rect width="20" height="20" fill="white"/></clipPath></defs>
                </symbol>
                <symbol width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="ranking">
                    <g clip-path="url(#clip0)"><path d="M19.9713 7.7054C19.9024 7.49325 19.7191 7.33865 19.4984 7.30661L13.2983 6.40564L10.5254 0.787416C10.4268 0.587417 10.223 0.460815 10 0.460815C9.77699 0.460815 9.57332 0.587417 9.4746 0.787416L6.70165 6.40564L0.501673 7.30661C0.281009 7.33865 0.0976116 7.49325 0.0287057 7.70536C-0.0402394 7.91751 0.0172604 8.15036 0.176986 8.30603L4.66322 12.6792L3.60432 18.8543C3.56658 19.0742 3.65697 19.2963 3.8374 19.4274C3.93947 19.5015 4.06037 19.5393 4.18185 19.5393C4.27513 19.5393 4.36873 19.517 4.45443 19.472L9.99999 16.5564L15.5453 19.4719C15.7428 19.5757 15.982 19.5585 16.1624 19.4274C16.3428 19.2963 16.4333 19.0741 16.3956 18.8542L15.3363 12.6792L19.823 8.30599C19.9827 8.15036 20.0403 7.91751 19.9713 7.7054Z" fill="white"/></g>
                    <defs><clipPath id="clip0"><rect width="20" height="20" fill="white"/></clipPath></defs>
                </symbol>
            </svg>
        </>
    );
}

export default Header;