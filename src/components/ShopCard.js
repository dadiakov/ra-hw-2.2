import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function ShopCard({e}) {
    return (
      <div className="cardview-card-item" id={e.name} key={uuidv4()}>
            <div className="cardview-header">
              <div className="cardview-item-name">{e.name}</div>
              <div className="cardview-item-color">{e.color}</div>
            </div>
  
            <div>
              <img className="cardview-card-img" src={e.img} alt="" />
            </div>
  
            <div className="cardview-footer">
              <div className="item-price">{'$' + e.price}</div>
              <button className="list-card-button">add to cart</button>
            </div>
          </div>
    )
  }

  ShopCard.propTypes = {
    e: PropTypes.object.isRequired,
  }