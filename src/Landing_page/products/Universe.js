import { Link } from 'react-router-dom';
function Universe() {
  return ( 
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="Media/images_Zerodha/smallcaseLogo.png" style={{width:"30%"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media/images_Zerodha/streakLogo.png" style={{width:"27%"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media/images_Zerodha/sensibullLogo.svg" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media/images_Zerodha/zerodhaFundhouse.png" style={{width:"30%"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media/images_Zerodha/goldenpiLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media/images_Zerodha/dittoLogo.png" style={{width:"18%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div> 
          <Link to="/signup"> 
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
        </Link>
        </div>
      </div>
    </div>
   );
}

export default Universe;