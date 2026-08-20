import "./App.css";
import heroImg from "./assets/hero.png";
import CategoryCard from "./components/category-cards";

function App() {
  const categories = [
    { id: 1, icon: "⚡", name: "Electrician" },
    { id: 2, icon: "🔧", name: "Plumber" },
    { id: 3, icon: "🪚", name: "Carpenter" },
    { id: 4, icon: "🧵", name: "Tailor" },
    { id: 5, icon: "🏠", name: "Painter" },
    { id: 6, icon: "🧑‍🔧", name: "Mechanic" },
    { id: 7, icon: "🧹", name: "Cleaner" },
  ];
  
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

      {/* Hero section */}
      <section className="hero">
        <div className="hero-text-container">
          <h1>Find trusted artisans near you</h1>
          <p>Connect with skilled professionals for the job you need done.</p>
          <div className="search-box">
            <input
              type="text"
              name="text"
              placeholder="What service do you need help with?"
            />
            <input
              type="text"
              name="text"
              placeholder="Where is your location?"
            />
            <button>Find an Artisan</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src={heroImg}
            alt="hero image showing different artisans from electrician to plumber to carpenter to tailor"
          />
        </div>
      </section>

      {/* How it works section */}
      <section className="how-it-works-section">
        <h2>How Find'em works</h2>

        <div className="how-it-works-container">
          <div className="how-it-works">
            <span>🔎</span>
            <h3>Search</h3>
            <p>Tell us what service you need.</p>
          </div>
          <div className="how-it-works">
            <span>👤</span>
            <h3>Choose</h3>
            <p>Browse artisans and choose one you trust.</p>
          </div>
          <div className="how-it-works">
            <span>📅</span>
            <h3>Book</h3>
            <p>Contact or book your chosen artisan.</p>
          </div>
        </div>
      </section>
      <section className="categories-section">
        <h2>Find an artisan for any job</h2>

        <div className="categories-container">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              name={category.name}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
