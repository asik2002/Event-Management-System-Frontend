import "./LandingPage.css";
import event from "../../../assets/Event.jpg"
const LandingPage = () => {
  return (
    <>
    <div className="landing-container">
    <div id="hero-section">
    <div className="description">
    <h1 id="heading">Experience the Art of Elegant Event Planning with Eventique</h1>
    <p id="description">Let us take the stress out of planning and turn your dream event into a stunning reality. With Eventique, every occasion becomes a masterpiece </p>
    </div>
    <img id="main-image" src={event}alt="main image"></img>
    </div>
    <div id="bottom">
          <h2 id="content">Sign up for full access to eventique</h2>    
    </div>
    <div id="footer">
        <h4>Eventique</h4>
        <p>&#169; Copyright 2024 Eventique - All rights reserved</p>
    </div>
    </div>
    </>
    
  )
}

export default LandingPage