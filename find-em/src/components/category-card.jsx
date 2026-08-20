function CategoryCard({icon, name}) {
  return (
    <div className="category-card">
      <span>{icon}</span>
      <h3>{name}</h3>
    </div>
  );
}

export default CategoryCard;