import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./nav-bar.scss";
import {
  product_man_link,
  product_man_link_name,
  product_woman_link,
  product_woman_link_name,
} from "../../../pages/product-database.js";
import { getStorageListLength } from "../../../pages/storage-helper.js";
import { useState, useEffect } from "react";

function NavBar() {

  const [itemNum, setItemNum] = useState(0);

  useEffect(() => {
    setItemNum(getStorageListLength());
  }, [sessionStorage]);
  
  return (
    <Navbar collapseOnSelect expand="md" bg="nav-background" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Clothing
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Man" id="collasible-nav-dropdown">
            {product_man_link.map(function (arr, index) {
              return (
                <NavDropdown.Item as={Link} to={`/product/man/${arr}`}>
                  {product_man_link_name[index]}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
          <NavDropdown title="Woman" id="collasible-nav-dropdown">
            {product_woman_link.map(function (arr, index) {
              return (
                <NavDropdown.Item as={Link} to={`/product/woman/${arr}`}>
                  {product_woman_link_name[index]}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown.Divider />
          <Nav.Link as={Link} to="/product/cart">
            Cart ({itemNum})
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
