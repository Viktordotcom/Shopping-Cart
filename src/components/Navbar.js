import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = ({ handleVisible, itemsInCart }) => {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <NavLink to="/Shopping-Cart/">Home</NavLink>
        <NavLink to="/Shopping-Cart/shop">Shop</NavLink>
        <p
          style={{ color: "red", display: "flex", alignItems: "center" }}
          onClick={handleVisible}
        >
          {" "}
          {itemsInCart.length > 0 && itemsInCart.length}{" "}
          <span style={{ color: "black" }} className="material-icons">
            shopping_cart
          </span>
        </p>
      </ul>
    </nav>
  );
};

export default Navbar;
