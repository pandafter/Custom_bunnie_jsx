import React, { useState} from 'react';
import useCartContext from '../../hooks/cartContext';
import { Link } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = ({ id, foto, nombre, precio }) => {

  const { addToCart, cartItems } = useCartContext();

  console.log('cartItems en itemdetails:', cartItems);


  const [quantityAdded, setQuantityAdded] = useState(0);


  const product = cartItems.find((item) => item.id === id);
  
 
  
  console.log('product:', product);


  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
  };

  const handleAddToCart = () => {
    addToCart({
      id,
      foto,
      nombre,
      precio,
      quantity: quantityAdded,
    });
  };

  return (
    <article className="Card">
      <header className="Header">
        <h2 className="ItemHeader">{product.nombre}</h2>
      </header>
      <picture>
        <img src={product.foto} alt={product.nombre} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Producto: {product.nombre}</p>
        <p className="Info">Precio: ${product.precio}</p>
        <p className="Info">Cantidad: {quantityAdded}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
           <Link to="/carrito" className="Option" onClick={() => {handleAddToCart(); handleOnAdd();}}>
          <button>
            Finish Purchase
          
          </button>
          </Link>
        ) : (
          []
        )}
      </footer>
    </article>
  );
};

export default ItemDetails;
