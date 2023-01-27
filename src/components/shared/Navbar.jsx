import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setRouteChange } from "../../redux/reducer/RouteChange";
import SideMenu from "./SideMenu";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <Navbar className="navbar-main navbar-expand" expand="xl">
      <Container fluid>
        <Navbar.Brand>Kavtech Solutions</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              onClick={() => {
                dispatch(setRouteChange({ to: "What We Do", activeKey: 0 }));
              }}
            >
              What We Do
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                dispatch(setRouteChange({ to: "How We Do It", activeKey: 1 }));
              }}
            >
              How We Do It
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                dispatch(
                  setRouteChange({ to: "Where It Works", activeKey: 2 })
                );
              }}
            >
              Where It Works
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Menu
        </Button>
        <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </Navbar>
  );
};

export default NavbarHome;
