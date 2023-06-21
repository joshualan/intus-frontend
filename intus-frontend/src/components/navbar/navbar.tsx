import {
  Navbar as BootstrapNavbar,
  NavbarBrand,
  Container,
} from "react-bootstrap";
import "./navbar.scss";

import { ReactComponent } from "@/assets/logo_IntusCare.svg";

export const Navbar = () => {
  return (
    <BootstrapNavbar
      sticky={"top"}
      className="bg-body-tertiary w-100 p-0 mh-25"
    >
      <Container className="m-0">
        <NavbarBrand>
          <ReactComponent className="ms-4" />
        </NavbarBrand>
      </Container>
    </BootstrapNavbar>
  );
};
