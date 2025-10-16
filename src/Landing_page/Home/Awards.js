import './Awards.css';
function Awards() {
  return (
    <div className="awards-container container mt-5">
      <div className="row align-items-center">
        <div className="col-6 p-5 text-center">
          <img src="Media/images_Zerodha/largestBroker.svg" alt="" className="award-image"/>
        </div>
        <div className=" col-6 p-6 mt-5">
          <h1 className="award-title">Largest Stock brocker in india</h1>
          <p className=" award-description mb-5">2+ million Zerodha client contribute to over 15% of all volumes in india daily by tradding and investing</p>
          <div className="row award-list">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future & options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives </p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPO</p>
                </li>
                <li>
                  <p>Direct Mutual fund</p>
                </li>
                <li>
                  <p>Bonds & Government Securities </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="press-logos mt-4 text-center">
          <img src="Media/images_Zerodha/pressLogos.png" style={{ width: "90%" }} alt="" className="press-image"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
