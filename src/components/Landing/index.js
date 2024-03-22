import "./style.css";
import React from "react";


function Landing() {
  return (
    <div className="boss-container">
        <div className="right-container">
            <img src="./biglogo.png" alt="tweet" style={{ width: '1121px', height: '1028px' }}/>
        </div>
    <div className="logo-box">
       
        <div className="logo-container"> 
      <img src="./twitter.png" alt="apple" className="logo" />
      </div>
      <h1>Happening now</h1>
      <h2>Join Twitter today</h2>
    
      <button>
        <img src="./google.png" alt="apple" />
        Sign in with Google
      </button>
      <button>
        <img src="./apple.png" className="apple" alt="apple" style={{ width: '32px', height: '32px' }}/>
        Sign in with Apple
      </button>
      <button>
        Sign up with phone or email
      </button>
    </div>
    </div>
  );
}
 
export default Landing;