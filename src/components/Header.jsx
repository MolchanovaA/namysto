import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./styles/header.css";

const Header = ({ setMenuRequest }) => {
  const navLinkStyleHandler = ({ isActive }) => {
    return isActive
      ? {
          color: "#234fd5",
          borderRadius: "10px",
        }
      : {};
  };
  const menu = [
    "NAMYSTO",
    "Support Us",
    "Media",
    "Contacts",
    "Present Projects",
    "Past Projects",
  ];
  function clickHandler(e) {
    if (menu.includes(e.target.innerText)) {
      setMenuRequest(e.target.innerText);
    }
  }
  return (
    <nav className="header-section" onClick={clickHandler}>
      <Container>
        <Row className="header-section-row nav_container">
          <Col sm={12} md={6} lg={2} className="button-container">
            <NavLink to="/" style={navLinkStyleHandler}>
              <img src={logo} alt="namysto logo" className="logo" />
            </NavLink>
          </Col>
          <Col sm={12} md={6} lg={2} className="button-container">
            <NavDropdown title="Our Projects" id="basic-nav-dropdown">
              <NavLink
                to="/current-projects"
                style={navLinkStyleHandler}
                className="dropdown-link"
              >
                Current Projects
              </NavLink>
              <NavDropdown.Divider />
              <NavLink
                className="dropdown-link"
                style={navLinkStyleHandler}
                to="/past-projects"
              >
                Past Projects
              </NavLink>
              <NavDropdown.Divider />
              <NavLink
                style={navLinkStyleHandler}
                to="/achievements"
                className="dropdown-link"
              >
                Achievements
              </NavLink>
            </NavDropdown>
          </Col>
          <Col sm={12} md={6} lg={2} className="button-container">
            <NavLink style={navLinkStyleHandler} to="/support-us">
              Support Us
            </NavLink>
          </Col>
          <Col sm={12} md={6} lg={2} className="button-container">
            <NavLink style={navLinkStyleHandler} to="/media">
              Media
            </NavLink>
          </Col>
          <Col sm={12} md={6} lg={2} className="button-container">
            <NavLink style={navLinkStyleHandler} to="/contacts">
              Contacts
            </NavLink>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Header;
