export default function CategoryList({ items, setSelectedCategory }) {
  const categories = items.map((item) => item.category);
  const uniqueCategories = [...new Set(categories)];
  return (
    <ul className="category-list">
      {" "}
      Category:
      {uniqueCategories.map((category, i) => (
        <li onClick={(e) => setSelectedCategory(e.target.textContent)} key={i}>
          {category}
        </li>
      ))}
    </ul>
  );
}
