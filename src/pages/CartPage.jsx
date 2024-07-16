
import { useSelector } from 'react-redux';
import '../styles/Cart.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart-cont">
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img alt='item' src={item.image} />
          <div>
            <h2>{item.title}</h2>
            <p>₹{item.price}</p>
          </div>         
        </div>
      ))}
    </div>
  );
};

export default CartPage;
