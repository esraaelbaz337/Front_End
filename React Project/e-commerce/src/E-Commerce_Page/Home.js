import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home img1">
      <div className="headerContainer">
        <h1 style={{marginBottom:'40px'}}> Welcome to E-Store </h1>
        <p>Electronic Products</p>
        <Link to="/signup">
          <button>Sign Up </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;