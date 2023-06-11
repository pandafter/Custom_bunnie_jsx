import icon_carrito from './assets/carrito_icon.png';
import { Link } from 'react-router-dom';
import useCartContext from '../../hooks/cartContext';


const CartWidget = () => {
  const { cartItems } = useCartContext();

  const cartItemCount = cartItems.reduce((total, item) => total + item.cantidad, 0);

  return (
    <main>
      <div className='carrito'>
        <Link id="carrito" to='/carrito'>
          <img src={icon_carrito} alt='cart-widget' />
        </Link>
        <p>{cartItemCount}</p>
      </div>
    </main>
  );
};

export default CartWidget;
