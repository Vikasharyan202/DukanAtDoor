
import { useSelector } from 'react-redux';
import '../styles/Cart.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h2>{item.name}</h2>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
