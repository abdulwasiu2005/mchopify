import { type FormEvent } from "react";

export interface CheckoutDetails {
    name: string;
    phone: string;
    address: string;
}

interface CheckoutFormProps {
    onSubmit: (details: CheckoutDetails) => void;
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const details: CheckoutDetails = {
        name: String(formData.get("name") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        address: String(formData.get("address") ?? "")
    };

    onSubmit(details);
};
    return (
  <form className="checkout-form" onSubmit={handleSubmit}>
    <h2 className="checkout-heading">Delivery Details</h2>

    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Enter your full name"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="address">Delivery Address</label>
      <textarea
        id="address"
        name="address"
        placeholder="Enter your delivery address"
        rows={3}
        required
      />
    </div>

    <button className="place-order-button" type="submit">
      Place Order
    </button>
  </form>
);
}