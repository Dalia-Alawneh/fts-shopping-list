import {
  Navbar as Nav,
  NavbarBrand,
  NavbarCollapse, NavbarToggle,
  TextInput
} from "flowbite-react";
import logo from '#assets/logo.svg';
import { NavLink } from "react-router-dom";
import { customInputTheme } from '../../../theme/index.js';
import CartNavLink from "./CartNavLink";

const Navbar = () => {
  return (
    <Nav className='bg-gray fixed top-0 w-full z-50'>
      <NavbarBrand href="/">
        <img src={logo} className="h-12 sm:h-16" alt="Logo" />
      </NavbarBrand>
      <div className="order-3 w-full sm:order-2 mt-5 sm:mt-0 sm:w-auto sm:flex-1 sm:mx-4 flex justify-center items-center">
        <TextInput
          id="search"
          type="search"
          placeholder="What are you rooting for?"
          className="w-full sm:w-[300px] lg:w-[400px] focus:shadow-none focus:border-primary-green"
          theme={customInputTheme}
        />
      </div>
      <NavbarToggle className="order-2 sm:order-3" />
      <NavbarCollapse className="order-2 sm:order-3" >
        <NavLink to='/' className={({ isActive }) =>
          isActive
            ? "text-primary-green font-bold hover:text-primary-green text-base"
            : "text-gray-700 dark:text-white hover:text-primary-green text-base"
        }>Home</NavLink>
        <CartNavLink/>
      </NavbarCollapse>
    </Nav>
  );
};

export default Navbar
