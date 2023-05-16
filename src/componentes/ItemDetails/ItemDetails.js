import './ItemDetails.css';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetails = ({ id, img, name, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <article className="Card">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Category: {category}</p>
        <p className="Info">Description: {description}</p>
        <p className="Info">Price: ${price}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/carrito" className="Option">
            Finish Purchase
          </Link>
        ) : ([])}
      </footer>
    </article>
  );
};

export default ItemDetails;
