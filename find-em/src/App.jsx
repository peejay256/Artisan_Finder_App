import "./App.css";
import heroImg from "./assets/hero.png";

function App() {
  return (
    <>
      <nav>
        <div>Find'em</div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Find an Artisan</a>
          <a href="#">How it works</a>
          <a href="#">Login</a>
          <a href="#">Sign up</a>
        </div>
      </nav>
      <section>
        <div className="hero-text">
          <h1>Find trusted artisans near you</h1>
          <p>Connect with skilled professionals for the job you need done.</p>
          <button>Find an Artisan</button>
        </div>
        <div className="hero-image-container">
          <img src={heroImg} alt="hero image showing different artisans from electrician to plumber to carpenter to tailor"/>
        </div>
      </section>
    </>
  );
}

export default App;
