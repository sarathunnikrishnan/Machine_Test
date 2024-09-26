import React, { useContext } from "react";
import "./Navbar.css";
import { CiShoppingCart } from "react-icons/ci";
import { ProductContext } from "../../Contex/ProductContex";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ProductContext);

  return (
    <div className="navbar">
      <div>
        <h4>Machine Test</h4>
      </div>
      <div className="navbar">
        <Nav.Link as={Link} to="cart" className="navbar">
          <CiShoppingCart />
          <div>{getTotalCartItems()}</div>
        </Nav.Link>
      </div>
    </div>
  );
};

export default Navbar;
