// src/components/ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../actions'; // Import addToCart action

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.filteredProducts);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <div className='container'>
    <div className='row'>

      {
        products.map((product) => (
          <div className='col-md-2 mt-1' key={product.id}>
            <div className="card mt-3 h-100">
            <img src={product.img} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">${product.price.toFixed(2)}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(product)} // Add this onClick handler
            >
                Add to Cart
            </button>
          </div>
        </div>
          </div>
        ))}
        {/* {loading ? <p>Loading...</p> :
        error ? <p>Error: {error.message}</p> :
        products.length === 0 ? <p>No products found.</p> :
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      } */}
    </div>
  </div>
  );
};

export default ProductList;
