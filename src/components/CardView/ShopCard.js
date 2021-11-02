export default function ShopCard({e}) {
    return (
      <div class="cardview-card-item" id={e.name}>
            <div class="cardview-header">
              <div class="cardview-item-name">{e.name}</div>
              <div class="cardview-item-color">{e.color}</div>
            </div>
  
            <div>
              <img class="cardview-card-img" src={e.img} alt="" />
            </div>
  
            <div class="cardview-footer">
              <div class="item-price">{'$' + e.price}</div>
              <button class="list-card-button">add to cart</button>
            </div>
          </div>
    )
  }