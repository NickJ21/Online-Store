import QuantityPicker from "../components/QuantityPicker";
import "./Product.css";

function Product(props) {
  function add() {
    console.log("add to cart");
  }
  return (
    <div className="product">
      <img src="/images/missing_image.jpg" alt=""></img>
      <h4>{props.title}</h4>
      <label>${props.price}</label>
      <QuantityPicker></QuantityPicker>
      <button className="btn btn-small btn-primary" onClick={add}>
        Add
      </button>
    </div>
  );
}

export default Product;
