import React from "react";
import "./Home.css"; // Make sure to create this CSS file

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Digital Card</h1>
          <p>Customize and share your business cards online!</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="content-section">
        <h2>Why Choose Digital Cards?</h2>
        <p>
          Digital cards are a modern and convenient way to share your
          information. Customize your card with our templates and make a great
          impression.
        </p>
      </section>
    </div>
  );
};

export default Home;
