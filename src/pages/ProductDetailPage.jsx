
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;
