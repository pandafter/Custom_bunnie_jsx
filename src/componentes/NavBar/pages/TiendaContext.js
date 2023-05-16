import React, { createContext, useState } from 'react';
import foto_1 from './content_pages/AIR_FORCE_1_model1_sin fondo.png';
import foto_2 from './content_pages/AIR_FORCE_1_model2_sin fondo.png';
import foto_3 from './content_pages/AIR_FORCE_1_model3_sin fondo.png';
import foto_4 from './content_pages/AIR_FORCE_1_model1_sin fondo.png';

export const TiendaContext = createContext();

const productos = [
  { id: 1, nombre: 'Nike Air Force 1 Bunnie Edition', precio: 350, foto: foto_2 },
  { id: 2, nombre: 'Nike Air Force 1 Orange Edition', precio: 300, foto: foto_1 },
  { id: 3, nombre: 'Nike Air Force 1 The Simpson Edition', precio: 350, foto: foto_3 },
  { id: 4, nombre: 'Nike Air Force 1 Black Red', precio: 350, foto: foto_4 },
];

const TiendaProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (producto, cantidad) => {
    const itemInCart = carrito.find(item => item.producto.id === producto.id);

    if (itemInCart) {
      setCarrito(carrito.map(item => {
        if (item.producto.id === producto.id) {
          return { producto: item.producto, cantidad: item.cantidad + cantidad };
        } else {
          return item;
        }
      }));
    } else {
      setCarrito([...carrito, { producto, cantidad }]);
    }
  };

  const removeFromCart = (productoId) => {
    setCarrito(carrito.filter(item => item.producto.id !== productoId));
  };

  return (
    <TiendaContext.Provider value={{ productos, carrito, addToCart, removeFromCart }}>
      {children}
    </TiendaContext.Provider>
  );
};

export default TiendaProvider;
