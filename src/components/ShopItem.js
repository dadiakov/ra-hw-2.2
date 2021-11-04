import PropTypes from 'prop-types';

export default function ShopItem({e}) {
    return (
      <div className="list-card-item" id={e.name}>
            <div>
              <img className="list-card-img" src={e.img} alt="" />
            </div>
            <div>{e.name}</div>
            <div>{e.color}</div>
            <div className="item-price">{'$' + e.price}</div>
            <button className="list-card-button">add to cart</button>
          </div>
    )
  }

ShopItem.propTypes = {
  e: PropTypes.object.isRequired,
}