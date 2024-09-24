import { useState } from "react";
import QuantityPicker from "../components/QuantityPicker";
import "./Product.css";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  function add() {
    console.log("add to cart");
  }

  function handleQuantity(qty) {
    setQuantity(qty);
  }
  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img src={props.data.image} alt=""></img>
      <h4>{props.data.title}</h4>
      <div className="prices">
        <label className="total">
          Total
          <span> ${getTotal()}</span>
        </label>
        <label className="price">
          Price
          <span>${props.data.price.toFixed(2)}</span>
        </label>
      </div>

      <div className="controls">
        <QuantityPicker onChange={handleQuantity}></QuantityPicker>
        <button className="btn btn-small btn-success" onClick={add}>
          Add <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default Product;
