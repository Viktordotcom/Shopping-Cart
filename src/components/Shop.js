import React from "react";
import "./styles/Shop.css";
import SearchShop from "./Search-Shop";
const Shop = ({ setVisible, items, setItems, itemsInCart, setItemsInCart }) => {
  return (
    <div className="main">
      <div className="List-items">
        <SearchShop
          items={items}
          setItems={setItems}
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          setVisible={setVisible}
        />
      </div>
    </div>
  );
};

export default Shop;
