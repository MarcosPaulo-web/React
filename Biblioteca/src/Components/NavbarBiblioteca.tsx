import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  createTheme,
} from "flowbite-react";

interface NavbarBibliotecaProps {
  toggleTheme: () => void; // só a função que alterna tema
}
const baseTheme = createTheme({
  navbar: {
    link: {
      base: "!text-slate-900 hover:!text-slate-200 transition-colors",
      active: {
        on: "!text-slate-200  hover:!text-slate-50 font-bold",
        off: "",
      },
    },
  },
});

export function NavbarBiblioteca({ toggleTheme }: NavbarBibliotecaProps) {
  return (
    <Navbar fluid className="bg-blue-600  dark:bg-blue-700">
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Senai
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
          <DropdownItem></DropdownItem>
          <DropdownItem>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
            >
              trocar tema
            </button>
          </DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink
          theme={baseTheme.navbar.link}
          className="text-white dark:text-slate-300"
          href="#"
          active
        >
          Home
        </NavbarLink>
        <NavbarLink theme={baseTheme.navbar.link} href="#">
          About
        </NavbarLink>
        <NavbarLink theme={baseTheme.navbar.link} href="#">
          Services
        </NavbarLink>
        <NavbarLink theme={baseTheme.navbar.link} href="#">
          Pricing
        </NavbarLink>
        <NavbarLink theme={baseTheme.navbar.link} href="#">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
