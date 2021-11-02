import ShopItem from "./ShopItem";

export default function ListView({ items }) {
    return (
      <div class="list-cards-container">
        {items.map((card) => (
          <ShopItem e={card} />
        ))}
      </div>
    );
  }