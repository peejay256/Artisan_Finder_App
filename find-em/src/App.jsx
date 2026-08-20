import "./App.css";
import heroImg from "./assets/hero.png";
import CategoryCard from "./components/category-card";
import ArtisanCard from "./components/artisan-card";

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

  const artisans = [
    {
      id: 1,
      name: "Chinedu Okafor",
      service: "Electrician",
      location: "Ikeja, Lagos",
      rating: 4.8,
      imageUrl: `https://i.pravatar.cc/300?img=1`,
    },
    {
      id: 2,
      name: "Amina Bello",
      service: "Tailor",
      location: "Yaba, Lagos",
      rating: 4.9,
      imageUrl: `https://i.pravatar.cc/300?img=2`,
    },
    {
      id: 3,
      name: "Tunde Adeyemi",
      service: "Plumber",
      location: "Surulere, Lagos",
      rating: 4.7,
      imageUrl: `https://i.pravatar.cc/300?img=3`,
    },
    {
      id: 4,
      name: "Emeka Nwosu",
      service: "Carpenter",
      location: "Lekki, Lagos",
      rating: 4.6,
      imageUrl: `https://i.pravatar.cc/300?img=4`,
    },
    {
      id: 5,
      name: "Blessing Eze",
      service: "Painter",
      location: "Gbagada, Lagos",
      rating: 4.8,
      imageUrl: `https://i.pravatar.cc/300?img=5`,
    },
    {
      id: 6,
      name: "Kunle Adebayo",
      service: "Mechanic",
      location: "Ojota, Lagos",
      rating: 4.7,
      imageUrl: `https://i.pravatar.cc/300?img=6`,
    },
    {
      id: 7,
      name: "Fatima Yusuf",
      service: "Cleaner",
      location: "Victoria Island, Lagos",
      rating: 4.9,
      imageUrl: `https://i.pravatar.cc/300?img=7`,
    },
    {
      id: 8,
      name: "Ibrahim Musa",
      service: "Electrician",
      location: "Maryland, Lagos",
      rating: 4.5,
      imageUrl: `https://i.pravatar.cc/300?img=8`,
    },
    {
      id: 9,
      name: "Ngozi Chukwu",
      service: "Tailor",
      location: "Festac, Lagos",
      rating: 4.8,
      imageUrl: `https://i.pravatar.cc/300?img=9`,
    },
    {
      id: 10,
      name: "Samuel Johnson",
      service: "Plumber",
      location: "Magodo, Lagos",
      rating: 4.6,
      imageUrl: `https://i.pravatar.cc/300?img=10`,
    },
    {
      id: 11,
      name: "David Ekanem",
      service: "Carpenter",
      location: "Ajah, Lagos",
      rating: 4.9,
      imageUrl: `https://i.pravatar.cc/300?img=11`,
    },
    {
      id: 12,
      name: "Grace Okoro",
      service: "Painter",
      location: "Ketu, Lagos",
      rating: 4.7,
      imageUrl: `https://i.pravatar.cc/300?img=12`,
    },
    {
      id: 13,
      name: "Musa Abdullahi",
      service: "Mechanic",
      location: "Mushin, Lagos",
      rating: 4.5,
      imageUrl: `https://i.pravatar.cc/300?img=13`,
    },
    {
      id: 14,
      name: "Esther Williams",
      service: "Cleaner",
      location: "Ikoyi, Lagos",
      rating: 4.8,
      imageUrl: `https://i.pravatar.cc/300?img=14`,
    },
    {
      id: 15,
      name: "Daniel Obi",
      service: "Electrician",
      location: "Agege, Lagos",
      rating: 4.7,
      imageUrl: `https://i.pravatar.cc/300?img=15`,
    },
    {
      id: 16,
      name: "Maryam Sani",
      service: "Tailor",
      location: "Oshodi, Lagos",
      rating: 4.9,
      imageUrl: `https://i.pravatar.cc/300?img=16`,
    },
    {
      id: 17,
      name: "Femi Balogun",
      service: "Plumber",
      location: "Anthony, Lagos",
      rating: 4.6,
      imageUrl: `https://i.pravatar.cc/300?img=17`,
    },
    {
      id: 18,
      name: "Kelvin Udo",
      service: "Carpenter",
      location: "Ikorodu, Lagos",
      rating: 4.5,
      imageUrl: `https://i.pravatar.cc/300?img=18`,
    },
    {
      id: 19,
      name: "Joy Peters",
      service: "Painter",
      location: "Alimosho, Lagos",
      rating: 4.8,
      imageUrl: `https://i.pravatar.cc/300?img=19`,
    },
    {
      id: 20,
      name: "Michael Adekunle",
      service: "Mechanic",
      location: "Apapa, Lagos",
      rating: 4.7,
      imageUrl: `https://i.pravatar.cc/300?img=20`,
    },
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

      {/* Category Section */}
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

      {/* Artisan Section */}
      <section className="artisans-section">
        <h2>Trusted Artisans near you</h2>

        <div className="artisans-container">
          {artisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
