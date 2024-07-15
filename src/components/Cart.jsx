
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/slices/cartSlice';
import '../styles/Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    alert('Product removed from cart!');
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    alert('Cart cleared!');
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button onClick={handleClearCart}>Clear Cart</button>
      )}
    </div>
  );
};

export default Cart;
