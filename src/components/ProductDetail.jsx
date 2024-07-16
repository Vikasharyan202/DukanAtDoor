
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/slices/cartSlice';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === parseInt(id))
  );
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert('Product added to cart!');
  };

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
