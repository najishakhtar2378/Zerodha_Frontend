import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img src="Media/images_Zerodha/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">Support</Link>
              </li>
            </ul>
            {/* <button className="btn btn-primary ms-4 px-2">Login</button> */}
          </form>
        </div>
      </div>
    </nav>

  );
}
export default Navbar;