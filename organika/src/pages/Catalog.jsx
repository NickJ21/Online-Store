import "./Catalog.css";
import Product from "./Product";

function Catalog() {
  return (
    <div className="catalog">
      <h1>Our amazing catalog</h1>

      <Product title="first product" price="12.32"></Product>
      <Product title="second product" price="9.89"></Product>
      <Product title="third product" price="3.12"></Product>
      <Product title="fourth product" price="4.78"></Product>
      <Product title="fifth products" price="9.78"></Product>
    </div>
  );
}

export default Catalog;
