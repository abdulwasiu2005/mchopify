
import { MenuItem } from "@/data/menu";
import Image from "next/image";

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuItemCard({
  item,
  onAddToCart
}: MenuItemCardProps) {
  return (
    <div className="menu-card">

      <div className="menu-image-container">
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={300}
          className="menu-image"
        />

        <span
          className={
            item.available
              ? "availability-badge available"
              : "availability-badge unavailable"
          }
        >
          {item.available ? "Available" : "Unavailable"}
        </span>
      </div>

      <div className="menu-card-content">

        <span className="menu-category">
          {item.category}
        </span>

        <h2>{item.name}</h2>

        <p className="menu-description">
          {item.description}
        </p>

        <div className="menu-card-footer">
          <p className="menu-price">
            {item.price.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN"
            })}
          </p>

          <button
            className="add-to-cart-button"
            onClick={() => onAddToCart(item)}
            disabled={!item.available}
          >
            {item.available ? "Add to Cart +" : "Unavailable"}
          </button>
        </div>

      </div>
    </div>
  );
}
