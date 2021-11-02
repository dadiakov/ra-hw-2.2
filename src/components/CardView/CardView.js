import ShopCard from "./ShopCard";

export default function CardView({ cards }) {
    return (
      <div class="cardview-cards-container">
        {cards.map((card) => (
          <ShopCard e={card} />
        ))}
      </div>
    );
  }