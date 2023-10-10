import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../actions';
import { fetchProducts, addToCart } from '../actions'; // Import addToCart action
const ProductCard = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };


  React.useEffect(() => {
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
            <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
          </div>
        ))}

    </div>
  </div>
  );
};

export default ProductCard;


