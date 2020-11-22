import React from 'react'
import classnames from "classnames";
import logo from "./../../assets/img/kthmatomhxanikhcard.png"
// reactstrap components
import {
    Collapse,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    UncontrolledDropdown
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
                        href="/home"
                    >
                        <img
                            src={logo}
                            width="100%"
                            height="100%"
                            className="d-inline-block align-top"
                            alt="..."
                            style={{maxHeight : "120px"}}
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
                            <NavLink href="/home">
                                <p>ΑΡΧΙΚΗ</p>
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                                aria-expanded={false}
                                aria-haspopup={true}
                                caret
                                color="default"
                                data-toggle="dropdown"
                                id="dropdownMenuButton"
                                nav
                                onClick={(e) => e.preventDefault()}
                                role="button"
                            >
                                <p>ΥΠΗΡΕΣΙΕΣ</p>
                            </DropdownToggle>
                            <DropdownMenu
                                aria-labelledby="dropdownMenuButton"
                                className="dropdown-info"
                            >
                                <DropdownItem
                                    href="/constService"
                                >
                                    Μελέτες - Κατασκευές
                                </DropdownItem>
                                <DropdownItem
                                    href="/repService"
                                >
                                    Ανακαινίσεις - Επισκευές
                                </DropdownItem>
                                <DropdownItem
                                    href="/engService"
                                >
                                    Υπηρεσίες Τεχνικού Γραφείου
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
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