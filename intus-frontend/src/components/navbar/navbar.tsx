import {
  Navbar as BootstrapNavbar,
  NavbarBrand,
  Container,
} from "react-bootstrap";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <BootstrapNavbar sticky={"top"} className="bg-body-tertiary w-100 p-0">
      <Container className="m-0">
        <NavbarBrand>
          <span className="brand">IntusCare</span>
        </NavbarBrand>
      </Container>
    </BootstrapNavbar>
  );
};
