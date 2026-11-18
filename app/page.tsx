'use client';

import { CartItem, MenuItem, menuItems } from "@/data/menu";
import MenuItemCard from "@/components/MenuItemCard";
import { useState } from "react";
import { MenuCategory } from "@/data/menu";
import Cart from "@/components/Cart";
import CheckoutForm, { type CheckoutDetails } from "@/components/CheckoutForm";
import Navbar from "@/components/Navbar";

export default function Home() {
  const categories: (MenuCategory | "All")[] = ["All", "Rice", "Swallow", "Proteins", "Drinks"];

  const [selectedCategory, setCategory] = useState<MenuCategory | "All">("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] =  useState(false);
  const [mobileView, setMobileView] = useState<"menu" | "cart">("menu");

  const filteredMenuItems = menuItems.filter(
  (item) => selectedCategory === "All" || item.category === selectedCategory
  );
  const checkoutSubtotal = cart.reduce((total, cartItem) => {
    return total + (cartItem.item.price * cartItem.quantity);
  }, 0);
  const totalCartItems = cart.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);

  const addToCart = (menuItem: MenuItem) => {
  setCart((previousCart) => {
    const existingItem = previousCart.find(
      (cartItem) => cartItem.item.id === menuItem.id
    );

    if (existingItem) {
      return previousCart.map((cartItem) =>
        cartItem.item.id === menuItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...previousCart, { item: menuItem, quantity: 1 }];
  });
  // console.log(cart);
};

const removeFromCart = (itemId: number) => {
  setCart((previousCart) =>
    previousCart.filter(
      (cartItem) => cartItem.item.id !== itemId
    )
  );
};

const increaseQuantity = (itemId: number) => {
  setCart((previousCart) =>
    previousCart.map((cartItem) =>
      cartItem.item.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  );
};

const decreaseQuantity = (itemId: number) => {
  setCart((previousCart) =>
    previousCart
      .map((cartItem) =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0)
  );
};

const handleCheckout = () => {
  if(cart.length === 0) return;

  setShowCheckout(true);
};

const handleOrderSubmit = (orderDetails: CheckoutDetails) => {
  alert(`${orderDetails.name}, your order was successful. You will receive a confirmation message here ${orderDetails.phone} and the order will be delivered to ${orderDetails.address}. Thank you for your patronage.`);
  setCart([]);
  setShowCheckout(false);
};

  return (
  <main className="page-container">
    <Navbar
      totalCartItems={totalCartItems}
      onCartClick={() => setMobileView("cart")}
      onMenuClick={() => setMobileView("menu")}
     />

    {!showCheckout ? (
      // MENU AND CART VIEW
      <>
        <header className="menu-header">
          {mobileView === "cart" ? <h1 className="menu-heading">Your Cart</h1> : 
          <div>
            <h1 className="menu-heading">Food menu</h1>
            <p className="menu-header-paragraph">Browse our delicious meals and order your favourites.</p>
          </div>
          }
        </header>

        <div className="order-layout">

          <section className={`menu-section ${
            mobileView === "cart" ? "mobile-hidden" : ""
          }`}>

            <div className="category-filters">
              {categories.map((category, index) => (
                <button
                  className={
                    selectedCategory === category
                      ? "category-button active"
                      : "category-button"
                  }
                  key={index}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="menu-grid">
              {filteredMenuItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  onAddToCart={addToCart}
                />
              ))}
            </div>

          </section>

          <aside
            className={`cart-section ${
              mobileView === "cart" ? "mobile-cart-view" : ""
            }`}
          >
            <button
              className="mobile-back-button"
              onClick={() => setMobileView("menu")}
            >
              ← Back to Menu
            </button>

            <Cart
              cart={cart}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeFromCart}
              onCheckout={handleCheckout}
            />
          </aside>

        </div>
      </>
    ) : (
      // CHECKOUT VIEW
      <section className="checkout-page">

        <button
          className="back-button"
          onClick={() => setShowCheckout(false)}
        >
          ← Back to Menu
        </button>

        <h1>Complete Your Order</h1>

        <div className="checkout-layout">

          <div className="checkout-details-section">
            <CheckoutForm onSubmit={handleOrderSubmit} />
          </div>

          <aside className="checkout-summary">
          <h2>Order Summary</h2>

        <div className="checkout-summary-items">
          {cart.map((cartItem) => (
            <div className="checkout-summary-item" key={cartItem.item.id}>
              <div className="summary-item-details">
                <h3>{cartItem.item.name}</h3>
                <p>Quantity: {cartItem.quantity}</p>
              </div>

              <p className="summary-item-price">
                {(cartItem.item.price * cartItem.quantity).toLocaleString(
                  "en-NG",
                  { style: "currency", currency: "NGN" }
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="checkout-total">
          <h3>Total</h3>
          <p>
            {checkoutSubtotal.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN"
            })}
          </p>
        </div>
    </aside>
    </div>
  </section>
    )}

  </main>
);

}
