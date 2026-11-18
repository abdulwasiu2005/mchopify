import { CartItem } from "@/data/menu";

interface CartProps {
    cart: CartItem[];
    onIncrease: (itemId: number) => void;
    onDecrease: (itemId: number) => void;
    onRemove: (itemId: number) => void;
    onCheckout: () => void;
}

export default function Cart({
    cart,
    onIncrease,
    onDecrease,
    onRemove,
    onCheckout,
}: CartProps) {
    const subTotal = cart.reduce((total, cartItem) => {
        return total + (cartItem.item.price * cartItem.quantity);
    }, 0);

    return (
        <div className="cart-container">
            <h2 className="cart-heading">Your Shopping Cart</h2>

            {cart.length === 0 ? (
                <p className="cart-empty">No items in your cart yet.</p>
            ) : (
                <div className="cart-content">
                    <div className="cart-items">
                        {cart.map((cartItem) => (
                            <div key={cartItem.item.id} className="cart-item">

                                <div className="cart-item-details">
                                    <h3>{cartItem.item.name}</h3>

                                    <p className="cart-item-price">
                                        {cartItem.item.price.toLocaleString("en-NG", {
                                            style: "currency",
                                            currency: "NGN"
                                        })} each
                                    </p>
                                </div>

                                <div className="cart-controls">
                                    <button onClick={() => onDecrease(cartItem.item.id)}>
                                        -
                                    </button>

                                    <p>{cartItem.quantity}</p>

                                    <button onClick={() => onIncrease(cartItem.item.id)}>
                                        +
                                    </button>
                                </div>

                                <div className="cart-item-total">
                                    { (cartItem.item.price * cartItem.quantity).toLocaleString("en-NG", {
                                        style: "currency",
                                        currency: "NGN"
                                    })}
                                </div>

                                <button
                                    className="remove-button"
                                    onClick={() => onRemove(cartItem.item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-subtotal">
                        <h3>Subtotal</h3>
                        <p>
                            {subTotal.toLocaleString("en-NG", {
                                style: "currency",
                                currency: "NGN"
                            })}
                        </p>
                    </div>

                    <button onClick={onCheckout} className="checkout-button">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
}