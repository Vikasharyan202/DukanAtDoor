import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar">
      <h1><Link to="/">My E-commerce Store</Link></h1>
      <div className="nav-links">
        <Link to="/">All Products</Link>
        <Link to="/cart" className='cart'><ShoppingCartIcon className='cart-icon'/>{cartItems.length}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
