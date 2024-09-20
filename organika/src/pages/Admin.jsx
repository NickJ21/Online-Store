import { useState } from "react";
import "./Admin.css";

function Admin() {
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
  }

  function handleProduct(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log(name, text);

    const copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }
  function saveProduct() {
    console.log(product);
  }

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
        </div>
      </div>
    </div>
  );
}

export default Admin;
