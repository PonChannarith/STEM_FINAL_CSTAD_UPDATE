import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react';
const NavbarComponent = () => {
  return (
    <>
      <nav className="w-full bg-[#16A1DF]">
        <Navbar fluid rounded className="bg-[#16A1DF] w-[80%] mx-auto">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              <Link as={Link} to="/">
                <img className="w-[90px] h-[60px] object-cover"  src="../src/assets/stemlogo-removebg-preview.png" alt="" />
              </Link>
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2 items-center space-x-4">
            <Link to="/login">
              <Button className="border-2 border-slate-600 bg-white hover:bg-slate-300 text-black font-suwannaphum">
                ចូលគណនី
              </Button>
            </Link>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
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
            <NavLink
              to="/book"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-white ${isActive ? 'text-yellow-300' : ''}`
              }
            >
              សៀវភៅ
            </NavLink>
            <NavLink
              to="/lesson"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-white ${isActive ? 'text-yellow-300' : ''}`
              }
            >
              មេរៀន
            </NavLink>
            <NavLink
              to="/forum"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-white ${isActive ? 'text-yellow-300' : ''}`
              }
            >
              វេទិកា
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-white ${isActive ? 'text-yellow-300' : ''}`
              }
            >
              ប្លុក
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-white ${isActive ? 'text-yellow-300' : ''}`
              }
            >
              អំពីយើង
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </>
  );
}

export default NavbarComponent;

            