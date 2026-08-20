function ArtisanCard({ artisan }) {
  return (
    <div className="artisan-card">
      <img src={artisan.imageUrl} alt={artisan.name} />
      <h3>{artisan.name}</h3>
      <p>{artisan.service}</p>
      <p>{artisan.location}</p>
      <p>⭐ {artisan.rating}</p>
      <button>View Profile</button>
    </div>
  );
}

export default ArtisanCard;
