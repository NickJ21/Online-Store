import "./Catalog.css";
import Product from "./Product";
import DataService, { categories } from "../services/DataService";
import { useEffect, useState } from "react";

function Catalog() {
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([]);

  async function loadData() {
    let data = await DataService.getProducts();
    setProducts(data);
  }

  // when the page loads
  useEffect(() => {
    loadData();
  }, []); // the [] is a dependancy that calls the load data function whenever it changes. It is empty because we only want to call it once, upon loading the page

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

      {products
        .filter((prod) => filter == "" || prod.category == filter)
        .map((prod) => (
          <Product data={prod}></Product>
        ))}
    </div>
  );
}

export default Catalog;
