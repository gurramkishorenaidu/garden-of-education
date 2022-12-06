import React from "react";
import { Dropdown } from "flowbite-react";

import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={false} className="bg-teal-500 shadow-md sticky top z-10">     
      
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9" 
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Garden of Education
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
        //   label={
        //     <Avatar
        //       alt="User settings"
        //       img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        //       rounded={true}
        //     />
        //   }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true} className="text-gray-800">
          Home
        </Navbar.Link>
        <Navbar.Link href="/aboutus" className="text-gray-100">About Us</Navbar.Link>
        <Navbar.Link href="/navbars" className="text-gray-100">Online Tuition</Navbar.Link>
        <Navbar.Link href="/pricing" className="text-gray-100">Pricing</Navbar.Link>
        <Navbar.Link href="/faq" className="text-gray-100">FAQ</Navbar.Link>
        <Navbar.Link href="/contact" className="text-gray-100">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
