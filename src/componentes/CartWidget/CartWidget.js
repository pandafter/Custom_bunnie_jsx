
import icon_carrito from './assets/carrito_icon.png';
import { Link} from 'react-router-dom';


const CartWidget = () => {

    return(
        
        <main>

        <div className='carrito'>
        
            <Link id="carrito" to='/carrito'><img src={icon_carrito}  alt='cart-widget'/></Link>
            <p>5</p>

            
        </div>

        
        </main>
    )


}

export default CartWidget;