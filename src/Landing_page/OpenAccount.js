import { Link } from 'react-router-dom';
function OpenAccount() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>  Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.</p>
          <div>
          <Link to="/signup"> 
        <button className="p-2 btn btn-primary mb-5" style={{ width: "15%", margin: "0 auto" }}>
          SignUp Now
        </button>
          </Link>
      </div>
      </div>
    </div>
  );
}
export default OpenAccount;