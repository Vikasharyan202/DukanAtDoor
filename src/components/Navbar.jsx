

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar">
      <h1><Link to="/">My E-commerce Store</Link></h1>
      <div className="cart">
        <Link to="/cart">Cart Items: {cartItems.length}</Link>
      </div>
      <div className="nav-links">
        <Link to="/">All Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
