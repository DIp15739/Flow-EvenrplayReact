import { useState } from 'react';
import {Nav, NavDropdown, Dropdown, Form} from 'react-bootstrap';
import Input from '../../Common/Input/Input';
import ButtonOutline from '../../Common/ButtonOutline/ButtonOutline';

const HeaderMenu = () =>{
    const [search, setSearch] = useState('');
    return(
        <>
            <Nav className="me-auto">
                <Nav.Link href="/">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M19.4598 8.69904C19.4593 8.69858 19.4589 8.69812 19.4584 8.69766L11.3 0.539551C10.9523 0.19165 10.4899 0 9.99812 0C9.50633 0 9.04399 0.191498 8.69609 0.539398L0.541952 8.69339C0.539205 8.69614 0.536458 8.69904 0.533712 8.70178C-0.180399 9.42001 -0.179179 10.5853 0.537221 11.3017C0.864522 11.6292 1.2968 11.8188 1.75899 11.8387C1.77776 11.8405 1.79668 11.8414 1.81575 11.8414H2.14092V17.8453C2.14092 19.0334 3.10756 20 4.29592 20H7.48775C7.81124 20 8.07369 19.7377 8.07369 19.4141V14.707C8.07369 14.1649 8.51467 13.7239 9.05681 13.7239H10.9394C11.4816 13.7239 11.9226 14.1649 11.9226 14.707V19.4141C11.9226 19.7377 12.1849 20 12.5085 20H15.7003C16.8887 20 17.8553 19.0334 17.8553 17.8453V11.8414H18.1568C18.6485 11.8414 19.1108 11.6499 19.4589 11.302C20.176 10.5844 20.1763 9.41711 19.4598 8.69904Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <span>Home</span>
                </Nav.Link>
                <Dropdown align="end" className="marketplaceDropdown">
                    <Dropdown.Toggle id="dropdown-basic">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                        <path d="M15.9092 15.8334H8.41417C7.33333 15.8334 6.375 15.1242 6.0825 14.1084L3.54917 5.52421C3.45917 5.21337 3.16 5.00004 2.81833 5.00004H0.833333C0.3725 5.00004 0 4.62671 0 4.16671C0 3.70671 0.3725 3.33337 0.833333 3.33337H2.81833C3.89917 3.33337 4.85667 4.04254 5.14917 5.05837L5.62333 6.66671H18.3692C18.8892 6.66671 19.3825 6.91421 19.6883 7.32921C19.9917 7.74087 20.0792 8.25587 19.9283 8.74254L18.2092 14.1992C17.8725 15.1842 16.95 15.8334 15.9092 15.8334ZM18.37 8.33337H18.3783H18.37Z" fill="white"/>
                        <path d="M9.16666 20C8.2475 20 7.5 19.2525 7.5 18.3333C7.5 17.4141 8.2475 16.6666 9.16666 16.6666C10.0858 16.6666 10.8333 17.4141 10.8333 18.3333C10.8333 19.2525 10.0858 20 9.16666 20ZM9.16666 18.3325V18.3333V18.3325Z" fill="white"/>
                        <path d="M14.9997 20C14.0805 20 13.333 19.2525 13.333 18.3333C13.333 17.4141 14.0805 16.6666 14.9997 16.6666C15.9188 16.6666 16.6663 17.4141 16.6663 18.3333C16.6663 19.2525 15.9188 20 14.9997 20ZM14.9997 18.3325V18.3333V18.3325Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>MarketPlace
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/marketplace">All NFT's</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Top Games</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Top Clips</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Nav.Link href="/ranking">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M19.9713 7.7054C19.9024 7.49325 19.7191 7.33865 19.4984 7.30661L13.2983 6.40564L10.5254 0.787416C10.4268 0.587417 10.223 0.460815 10 0.460815C9.77699 0.460815 9.57332 0.587417 9.4746 0.787416L6.70165 6.40564L0.501673 7.30661C0.281009 7.33865 0.0976116 7.49325 0.0287057 7.70536C-0.0402394 7.91751 0.0172604 8.15036 0.176986 8.30603L4.66322 12.6792L3.60432 18.8543C3.56658 19.0742 3.65697 19.2963 3.8374 19.4274C3.93947 19.5015 4.06037 19.5393 4.18185 19.5393C4.27513 19.5393 4.36873 19.517 4.45443 19.472L9.99999 16.5564L15.5453 19.4719C15.7428 19.5757 15.982 19.5585 16.1624 19.4274C16.3428 19.2963 16.4333 19.0741 16.3956 18.8542L15.3363 12.6792L19.823 8.30599C19.9827 8.15036 20.0403 7.91751 19.9713 7.7054Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <span>Rankings</span>
                </Nav.Link>
                <Form className="searchHeader" >
                    <Input type="search" value={search} onChange={setSearch} placeholder="Type Something" />
                </Form>
            </Nav>
        </>
    );
}

export default HeaderMenu;