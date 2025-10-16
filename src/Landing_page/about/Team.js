import './Team.css';
function Team() {
  return ( 
    <div className="team-container">
      <div className="row p-3 mt-5 border-top">
        <h1 className=" text-center team-title">People</h1>
      </div>
      <div className="row p-3 mt-5  text-muted team-content"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
        <div className="col-6 p-3 text-center">
          <div className="profile-pic">
         <img src="Media/images_Zerodha/WhatsApp Image 2023-03-29 at 9.42.28 PM.jpg" alt="Najish Akhtar" />
          </div>
         <h4 className="mt-5 name ">NAJISH AKHTAR</h4>
         <h6 className="degination"> Founder,CEO</h6>
        </div> 
        <div className="col-6 p-3 about-text">
          <p>
            Najish bootstrapped and founded Zerodha_Clone in 2025 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>Playing Cricket and some Indoor game</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">Linkedin</a> /{" "}
            <a href="https://instagram.com/najish3262">Instagram</a>
          </p>
        </div>
      </div>
    </div>
   );
}

export default Team;