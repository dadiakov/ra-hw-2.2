import ShopItem from "./ShopItem";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function ListView({ items }) {
    return (
      <div className="list-cards-container">
        {items.map((card) => (
          <ShopItem e={card} key={uuidv4()} />
        ))}
      </div>
    );
  }

ListView.propTypes = {
  items: PropTypes.array.isRequired,
}