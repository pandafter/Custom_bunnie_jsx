import React, { useState, useEffect } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import Swiper from 'swiper';
import foto_1 from './content_pages/AIR_FORCE_1_model1_sin fondo.png';
import foto_2 from './content_pages/AIR_FORCE_1_model2_sin fondo.png';
import foto_3 from './content_pages/AIR_FORCE_1_model3_sin fondo.png';
import foto_4 from './content_pages/AIR_FORCE_1_model1_sin fondo.png';
import ItemCount from '../../ItemCount/ItemCount';
import 'swiper/swiper-bundle.min.css';
import './style.css';
import useCartContext  from '../../../hooks/cartContext';





SwiperCore.use([Autoplay, Navigation, Pagination]);

const TiendaPage = () => {
    const {addToCart, cartItems} = useCartContext();

  
    

  const [productos] = useState([
    { id: 1, nombre: 'Nike Air Force 1 Bunnie Edition', precio: 350, foto: foto_2, stock: 10 },
    { id: 2, nombre: 'Nike Air Force 1 Orange Edition', precio: 300, foto: foto_1, stock: 5 },
    { id: 3, nombre: 'Nike Air Force 1 The Simpson Edition', precio: 350, foto: foto_3, stock: 20 },
    { id: 4, nombre: 'Nike Air Force 1 Black Red', precio: 350, foto: foto_4, stock: 10 },
  ]);

  const handleAddToCart = (producto, cantidad) => {
    const item = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      foto: producto.foto,
      cantidad: cantidad,

    };
    addToCart(item);
    console.log('item en tienda: ', cartItems);
    
  };

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      safelyCallDestroy(swiper);
    };
  }, []);

  const safelyCallDestroy = (swiper) => {
    if (swiper && typeof swiper.destroy === 'function') {
      swiper.destroy(true, true);
    }
  };

  useEffect(() => {
    console.log('Cart items:', cartItems);
  }, [cartItems]);

  return (
    <main>
      <div>
        <h1 id="titulo_tienda">Tienda</h1>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {productos.map((producto) => (
              <div key={producto.id} className="swiper-slide">
                <img src={producto.foto} alt={producto.nombre} />
                <h2 id="nombre_producto">{producto.nombre}</h2>
                <p id="precio_productos">${producto.precio}</p>

                <ItemCount stock={producto.stock} product={producto.id} onAdd={(quantity) => handleAddToCart(producto, quantity)} />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TiendaPage;
