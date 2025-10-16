function LeftSection({ imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore, }) {
  return ( <div className="container mt-5">
    <div className="row ">
       <div className="col-6 ">
        <img src={imageURL} style={{width:"75%"}}/>
       </div> 
       <div className="col-6 p-4 mt-5">
        <h1>{productName}</h1>
        <p>{productDesription}</p>
       <div>
          <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
          <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More</a>
       </div>
      <div className="mt-5">
          <a href={googlePlay}><img src="Media/images_Zerodha/googlePlayBadge.svg" /></a>
          <a href={appStore}><img src="Media/images_Zerodha/appstoreBadge.svg" 
          style={{ marginLeft: "50px" }} /></a>
      </div>
       </div>

    </div>
  </div>
   );
}

export default LeftSection;