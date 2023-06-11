import logo from'./content/logo_blanco_sinfondo.png';
import icon_customiza from './content/custom_icon.png';
import icon_init from './content/inicio_icon.png';
import icon_shop from './content/tienda_icon.png';
import icon_contacto from './content/contacto_icon.png';




import CartWidget from '../CartWidget/CartWidget';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


import HomePage from "./pages/HomePage";
import CustomizaPage from "./pages/CustomizaPage";
import TiendaPage from "./pages/TiendaPage";
import ContactoPage from "./pages/ContactoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CarritoPage from './pages/CarritoPage';
import ItemDetails from '../ItemDetails/ItemDetails';



import '../../index.css';


const NavBar = () => {
return(

        <Router>
        <div>
        <header className='header'>
            <div>
            <Link to='/login'>
            <button className="botones" id="boton_login">LOGIN</button>
            </Link>
            </div>
            <div>
            <Link to='/register'>
            <button className="botones" id="boton_register">SING UP</button>
            </Link>
            </div>


            <nav >
            <div>
            <ul id="navbar">
                <li>
                <Link className="inicio" to="/Home" ><img id='personita' src={icon_init} alt='personita'/></Link>
                </li>
                <li>
                <Link id="customiza" to="/customiza" ><img id='icon_custom' src={icon_customiza} alt='icon_custom'></img></Link>
                </li>
                <li>
                <Link to="/Home"><img id='logo' src={logo} alt='logo'/></Link>
                </li>
                <li>
                <Link id="shop" to="/tienda" ><img id='icon_shop' src={icon_shop} alt='icon_shop'></img></Link>
                </li>
                <li>
                <Link id="contacto" to="/contacto" ><img id='icon_contacto' src={icon_contacto} alt='icon_contacto'></img></Link>
                </li>
                </ul>
            </div>
                
       
            </nav>

            <CartWidget/>

        </header>
        

        <Routes>
            <Route  path="/" element={<HomePage />} />
            <Route  path="/Home" element={<HomePage />} />
            <Route  path="/customiza" element={<CustomizaPage />} />
            <Route  path="/tienda" element={<TiendaPage />} />
            <Route  path="/contacto" element={<ContactoPage />} />
            <Route  path="/carrito" element={<CarritoPage />} />
            <Route  path="/login" element={<LoginPage />} />
            <Route  path="/register" element={<RegisterPage />} />
            <Route path="/itemDetails" element={<ItemDetails />} />
            <Route  path="/itemDetails/:id" element={<ItemDetails />} />
        </Routes>
        </div>
        


      
</Router>

)
}

export default NavBar;