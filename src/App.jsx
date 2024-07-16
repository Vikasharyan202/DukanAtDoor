import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Navbar from './components/Navbar';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<AllProductsPage />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
