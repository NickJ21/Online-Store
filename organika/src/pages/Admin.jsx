import { useEffect, useState } from "react";
import "./Admin.css";
import DataService from "../services/DataService";

function Admin() {
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
  });

  function handleCoupon(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log(name, text);

    // copy, modify the copy, set the copy
    const copy = { ...coupon };
    copy[name] = text;
    setCoupon(copy);
  }
  function saveCoupon() {
    console.log(coupon);
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  function handleProduct(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log(name, text);

    const copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }
  async function saveProduct() {
    console.log(product);
    //fix price, the plus sign at the beginning parses string into float
    let fixedProd = { ...product };
    fixedProd.price = parseFloat(fixedProd.price); //can also be done with +fixedProd.price

    let copy = [...allProducts];
    copy.push(fixedProd);
    setAllProducts(copy);

    let resp = await DataService.saveProduct(fixedProd);
    console.log(resp);
  }

  async function loadData() {
    let prods = await DataService.getProducts();
    setAllProducts(prods);
  }

  useEffect(() => {
    loadData();
  });
  return (
    <div className="admin page">
      <h1>
        <i class="fa-solid fa-user-tie"></i> Store Administration
      </h1>
      <div className="parent">
        <div className="products">
          <div className="form">
            <h3>Register a Product</h3>
            <div>
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                onBlur={handleProduct}
                name="title"
              ></input>
            </div>
            <div>
              <label className="form-label">Image</label>
              <input
                type="text"
                className="form-control"
                onBlur={handleProduct}
                name="image"
              ></input>
            </div>
            <div>
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                onBlur={handleProduct}
                name="category"
              ></input>
            </div>
            <div>
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                onBlur={handleProduct}
                name="price"
              ></input>
            </div>
            <div className="controls">
              <button className="btn btn-outline-primary" onClick={saveProduct}>
                Save Product
              </button>
            </div>
          </div>
          {allProducts.map((prod) => (
            <li className="prod">
              <img src={prod.image} alt="" />
              <h5>{prod.title}</h5>
              <label>{prod.category}</label>
              <label>${prod.price}</label>
            </li>
          ))}
        </div>
        <div className="coupons">
          <div className="form">
            <h3>Register a Coupon</h3>
            <div>
              <label className="form-label">Code</label>
              <input
                type="text"
                className="form-control"
                onBlur={handleCoupon}
                name="code"
              ></input>
            </div>
            <div>
              <label className="form-label">Discount</label>
              <input
                type="text"
                className="form-control"
                onBlur={handleCoupon}
                name="discount"
              ></input>
            </div>
            <div className="controls">
              <button className="btn btn-outline-dark" onClick={saveCoupon}>
                Save Coupon
              </button>
            </div>
          </div>
          {allCoupons.map((cp) => (
            <li>
              {cp.code} - {cp.discount}%
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
