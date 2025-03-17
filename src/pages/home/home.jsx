// //1st prototype

// import React from "react";
// import "./Home.css"; 
// import NavbarComponent from "../../Component/NavbarComponent/navbar";

// const Home = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       {/* <NavbarComponent /> */}

// {/* Hero Section */}
// <header className="hero-section">
//   <div className="hero-content">
//     <h1>Welcome to Digital Card</h1>
//     <p>Customize and share your business cards online!</p>
//     <button className="btn btn-light">Get Started</button>
//   </div>
// </header>

//       {/* Main Content */}
//       <section className="content-section">
//         <h2>Why Choose Digital Cards?</h2>
//         <p>
//           Digital cards are a modern and convenient way to share your
//           information. Customize your card with our templates and make a great
//           impression.
//         </p>
       
//       </section>

     

//     </div>
//   );
// };

// export default Home;


// 2nd prototype
import React from "react";
import "./Home.css"; 
import NavbarComponent from "../../Component/NavbarComponent/navbar";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      {/* <NavbarComponent /> */}

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Digital Card</h1>
          <p>Customize and share your business cards online!</p>
          <button className="btn btn-light">Get Started</button>
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

      {/* Slideshow Section */}
      <section className="slideshow-container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="public\cafe template.png" className="d-block w-100" alt="Slide 1"/>
            </div>
            <div className="carousel-item">
              <img src="/images/public\constraction template.png.jpg" className="d-block w-100" alt="Slide 2"/>
            </div>
            <div className="carousel-item">
              <img src="public\Lawer.png" className="d-block w-100" alt="Slide 3"/>
            </div>
            <div className="carousel-item">
              <img src="public\sales.png" className="d-block w-100" alt="Slide 3"/>
            </div>
            <div className="carousel-item">
              <img src="public\Strikingly - Brave 3_17_2025 8_55_24 AM.png" className="d-block w-100" alt="Slide 3"/>
            </div>
            <div className="carousel-item">
              <img src="public\Unique.png" className="d-block w-100" alt="Slide 3"/>
            </div>
          </div>
          
          {/* Left Navigation Button */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>

          {/* Right Navigation Button */}
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </section>

      {/* Contact Us Form */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;


