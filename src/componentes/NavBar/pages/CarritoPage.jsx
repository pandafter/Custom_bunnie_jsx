import React from 'react';
import useCartContext from '../../../hooks/cartContext';

const CarritoPage = () => {
  const { cartItems } = useCartContext();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.foto} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>CARRITO VACIO</h3>
      )}
    </div>
  );
};

export default CarritoPage;
