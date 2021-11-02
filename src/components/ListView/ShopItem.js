export default function ShopItem({e}) {
    return (
      <div class="list-card-item" id={e.name}>
            <div>
              <img class="list-card-img" src={e.img} alt="" />
            </div>
            <div>{e.name}</div>
            <div>{e.color}</div>
            <div class="item-price">{'$' + e.price}</div>
            <button class="list-card-button">add to cart</button>
          </div>
    )
  }