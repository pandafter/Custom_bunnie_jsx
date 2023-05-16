
import './ItemCount.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemCount = ({ stock, product, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    if (onAdd && typeof onAdd === 'function') {
      onAdd(quantity, product);
 
      
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" id="boton_disminuir" onClick={decrement}>
          -
        </button>
        <h4 className="Number" id="cantidad">
          {quantity}
        </h4>
        <button className="Button" id="boton_aumentar" onClick={increment}>
          +
        </button>
      </div>

      <div>
        <Link to="/itemDetails" >
        <button
          id="boton_agregar"
          className="Button"
          onClick={() => {
            console.log(
              'se agrego al carrito ' +
                quantity +
                ' productos con id: ' +
                product
            );
            addToCart();
            
          }}
        >
          Agregar al carrito
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;

