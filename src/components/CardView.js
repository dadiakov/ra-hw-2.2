import ShopCard from "./ShopCard";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function CardView({ cards }) {
    return (
      <div className="cardview-cards-container">
        {cards.map((card) => (
          <ShopCard e={card}  key={uuidv4()} />
        ))}
      </div>
    );
  }

CardView.propTypes = {
  cards: PropTypes.array.isRequired,
}