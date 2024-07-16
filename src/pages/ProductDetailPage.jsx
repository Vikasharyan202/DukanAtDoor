import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/slices/cartSlice';
import '../styles/ProductDetailPage.css';

const ProductDetailPage = () => {
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
      <img alt='product' src={product.image} />
      <div className='details'>
        <h1>{product.title}</h1>
        <p>₹{product.price}</p>
        <p>{product.category}</p>
      </div>     
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;
