import "./Catalog.css";
import Product from "./Product";
import { catalog as Products, categories } from "../services/DataService";

function Catalog() {
  return (
    <div className="catalog">
      <h1>
        <i class="fa-solid fa-basket-shopping"></i> Our amazing catalog
      </h1>

      <div className="filters">
        {categories.map((cat) => (
          <button className="btn btn-sm btn-outline-dark">{cat}</button>
        ))}
      </div>

      {Products.map((prod) => (
        <Product data={prod}></Product>
      ))}
    </div>
  );
}

export default Catalog;
