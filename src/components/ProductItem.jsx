/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct, deleteProduct } from '../redux/slices/productsSlice';
import { addToCart } from '../redux/slices/cartSlice';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    dispatch(editProduct(editedProduct));
    alert('Product updated successfully!');
  };

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
    alert('Product deleted successfully!');
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert('Product added to cart!');
  };

  return (
    <div className="product-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedProduct.name}
            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
          />
          <input
            type="number"
            value={editedProduct.price}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
