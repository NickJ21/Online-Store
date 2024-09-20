import QuantityPicker from "../components/QuantityPicker";
import "./Product.css";

function Product(props) {
  function add() {
    console.log("add to cart");
  }

  return (
    <div className="product">
      <img src={props.data.image} alt=""></img>
      <h4>{props.data.title}</h4>
      <label>${props.data.price}</label>

      <div className="controls">
        <QuantityPicker></QuantityPicker>
        <button className="btn btn-small btn-success" onClick={add}>
          Add <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default Product;
