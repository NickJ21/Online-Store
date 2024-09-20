import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Organika
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              <i class="fa-solid fa-seedling"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/catalog">
              <i class="fa-solid fa-basket-shopping"></i> Catalog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">
              <i class="fa-solid fa-address-card"></i> About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/admin">
              <i class="fa-brands fa-black-tie"></i> Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact">
              <i class="fa-solid fa-address-book"></i> Contact
            </Link>
          </li>
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
