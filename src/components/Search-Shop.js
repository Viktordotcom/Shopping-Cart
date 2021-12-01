import * as React from "react";
import CategoryList from "./Category-List";
import { useLocation, NavLink, useSearchParams, Link } from "react-router-dom";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function SearchShop({
  setVisible,
  items,
  setItems,
  itemsInCart,
  setItemsInCart,
}) {
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  const [selectedCategory, setSelectedCategory] = React.useState(" ");
  return (
    <>
      <div
        className="category-list"
        style={{ borderRight: "solid 1px", padding: "1rem" }}
      >
        <div className="search-container">
          <span className="material-icons">search</span>
          <input
            placeholder="Search by alphabet"
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter }, { replace: true });
              } else {
                setSearchParams({}, { replace: true });
              }
            }}
          />
        </div>
        <CategoryList
          items={items}
          setItems={setItems}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="items-container">
        {items
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .filter((item) => item.category.startsWith(selectedCategory))
          .map((item) => (
            <div key={item.id}>
              <span
                className="material-icons"
                onClick={() => {
                  setVisible(true);
                  setItemsInCart((draft) => {
                    const isDuplicateItem = itemsInCart.some(
                      (element) => element.id === item.id
                    );
                    !isDuplicateItem
                      ? draft.push(item)
                      : draft.map((targetItem) => {
                          console.log(targetItem.id, item.id);
                          console.log(itemsInCart);
                          return targetItem.id === item.id
                            ? (targetItem.inCart += 1)
                            : targetItem;
                        });
                  });
                }}
              >
                add_shopping_cart
              </span>
              <QueryNavLink
                key={item.id}
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to={`/shop/${item.id}`}
              >
                <div className="image-container" key={item.id}>
                  <Link to={`/shop/${item.id}`}>
                    <img
                      src={require(`${item.imgSource}`).default}
                      alt={item.name}
                    ></img>
                  </Link>
                  <p>{item.name}</p>
                  <h2>{item.price}$</h2>
                </div>
              </QueryNavLink>
            </div>
          ))}
      </div>
    </>
  );
}
