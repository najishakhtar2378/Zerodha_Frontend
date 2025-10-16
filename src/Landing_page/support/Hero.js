import './Hero.css';
function Hero() {
  return ( 
 <div className="container-fluid" id="supportHero">
    <div className="p-3" id="supportWrapper">
      <h4 className="colorSupport">Support Portal</h4>
      <a href="" style={{color:"white"}}>Track Tickets</a>
    </div>
      <div className="row p-3 m-5">
        <div className="col-6 p-3">
          <h1 className="fs-5" style={{color:"white"}}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="" style={{color:"white", margin:"5px"}}>Track account opening</a>
          <a href="" style={{ color: "white", margin:"5px" }}>Track segment activation</a>  
          <a href="" style={{ color: "white", margin:"5px" }}>Intraday margins</a> 
          <a href="" style={{ color: "white", margin: "5px" }}>Kite user manual</a> 
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-5" style={{ color: "white", marginLeft:"15px" }}>Featured</h1>
          <ol>
            <li>
              <a href="" style={{ color: "white" }}>Current Takeovers and Delisting - October 2025</a>
            </li>
            <li>
              <a href="" style={{ color: "white" }}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
        
      </div>
 </div>
   );
}

export default Hero;