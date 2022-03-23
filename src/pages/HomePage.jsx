import "../App.css";
import React from "react";
import landing from "../assets/landing.jpg";

function HomePage() {
 
  return (
    <div className="App">

<header className="landingpage">

  <div>
  <h1>Welcome to a space for tech engineers!</h1>
  <p>With Tech & Tapas you can sign up, edit your portfolio site, make blog posts and explore other users posts and portfolios while staying up to date on the latest tech news and tech meet ups.</p>
  
  <a href="/auth/signup"><button >Get Started</button></a>
  
  </div>

  <img src={landing}/>   

  </header>  
    </div>
  );
}

export default HomePage;
