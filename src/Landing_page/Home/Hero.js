import { Link } from 'react-router-dom';
import './Hero.css';
function Hero() {
  return ( 
     <div className=" hero-container container mb-5">
      <div className="row text-center">
        <img src='Media/images_Zerodha/homeHero.png' alt='Hero Image' className=" hero-image mb-5"/>
        <h1 className=" hero-title mt-5">Invest in EveryThing</h1>
        <p className="hero-subtitle">Online platform to invest in stocks,derivatives,mutual fund and more</p>

       <div>
        <Link to="./signup">
          <button
            className="p-2 btn btn-primary fs-5 mb-5 hero-btn">
            Signup Now
          </button>
          </Link>
       </div>
      </div>
     </div>
   );
}

export default Hero;