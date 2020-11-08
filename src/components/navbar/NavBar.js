import React from 'react'
import classnames from "classnames";
import logo from "./../../assets/img/kthmatomhxanikhLogo.png"
// reactstrap components
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";

function NavBar() {

  /*const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");*/
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  return (
      <Navbar className="fixed-top" expand="lg">
        <Container style={{maxWidth: "1300px"}}>
          <div className="navbar-translate">
            <NavbarBrand
                data-placement="bottom"
                href="/"
            >
              <img
                  src={logo}
                  width="50%"
                  height="100%"
                  className="d-inline-block align-top"
                  alt="..."
              />
            </NavbarBrand>
            <button
                aria-expanded={navbarCollapse}
                className={classnames("navbar-toggler navbar-toggler", {
                  toggled: navbarCollapse,
                })}
                onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1"/>
              <span className="navbar-toggler-bar bar2"/>
              <span className="navbar-toggler-bar bar3"/>
            </button>
          </div>
          <Collapse
              className="justify-content-end"
              navbar
              isOpen={navbarCollapse}
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="#">
                  <p>ΑΡΧΙΚΗ</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <p>ΥΠΗΡΕΣΙΕΣ</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <p>ΕΠΙΚΟΙΝΩΝΙΑ</p>
                </NavLink>
              </NavItem>
            </Nav>

          </Collapse>

        </Container>
      </Navbar>

  );

}

export default NavBar;