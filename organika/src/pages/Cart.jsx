import { useContext } from "react";
import DataContext from "../state/DataContext";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(DataContext);

  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      total += prod.quantity * prod.price;
    }
    return total.toFixed(2);
  }

  return (
    <div className="cart page">
      <h1>Cart</h1>
      <h4>
        Proceed to checkout for <b>{cart.length}</b> items.
      </h4>
      <div className="parent">
        <div className="list">
          {cart.length == 0 ? (
            <div className="alert alert-primary">
              <h5>Go to Catalog and add product there!</h5>
            </div>
          ) : null}
          {cart.map((prod) => (
            <div className="prod-cart">
              <img src={prod.image} alt=""></img>
              <h5>{prod.title}</h5>
              <label>${prod.price}</label>
              <label>{prod.quantity}</label>
              <label>${(prod.price * prod.quantity).toFixed(2)}</label>
              <button className="btn btn-danger">
                <i className="fa-regular fa-trash-can"></i>{" "}
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 ? (
          <div className="side">
            <h4>Total</h4>
            <h3>${getTotal()}</h3>
            <button className="btn btn-primary">Proceed to Checkout</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
