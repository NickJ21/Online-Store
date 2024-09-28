import "./Catalog.css";
import Product from "./Product";
import { catalog as Products, categories } from "../services/DataService";
import { useState } from "react";

function Catalog() {
  const [filter, setFilter] = useState("");

  return (
    <div className="catalog">
      <h1>
        <i class="fa-solid fa-basket-shopping"></i> Our amazing catalog
      </h1>

      <div className="filters">
        <button className="btn btn-sm btn-dark" onClick={() => setFilter("")}>
          All
        </button>
        {categories.map((cat) => (
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {Products.filter((prod) => filter == "" || prod.category == filter).map(
        (prod) => (
          <Product data={prod}></Product>
        )
      )}
    </div>
  );
}

export default Catalog;
