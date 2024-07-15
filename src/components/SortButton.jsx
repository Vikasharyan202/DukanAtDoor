import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortProducts, fetchProducts } from '../redux/slices/productsSlice';
import '../styles/SortButton.css';

const SortButton = () => {
  const [sorted, setSorted] = useState(false);
  const dispatch = useDispatch();

  const handleSort = () => {
    setSorted(true);
    dispatch(sortProducts());
  };

  const handleClearSort = () => {
    setSorted(false);
    dispatch(fetchProducts());
  };

  return (
    <div className="sort-button">
      {!sorted ? (
        <button onClick={handleSort}>Sort by Price</button>
      ) : (
        <button onClick={handleClearSort}>Clear Sort</button>
      )}
    </div>
  );
};

export default SortButton;
