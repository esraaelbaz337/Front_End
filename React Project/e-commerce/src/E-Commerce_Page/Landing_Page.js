import React from 'react';

const LandingPage = () => {
    return (
        <div className="container" style={{margin:"500px", backgroundImage:"/Images/R.jbg"}}>
          <h1>Welcome to My Website</h1>
          <p>
            Thank you for visiting! Feel free to explore and learn more about me and my
            work.
          </p>
          <a href="/about.html" className="button">
            Show Product
          </a>
        </div>

    );
}

export default LandingPage;
