import React, { useState } from "react";
import { useImmer } from "use-immer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import storeItems from "./data";
import Item from "./components/Item";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState(storeItems);
  const [itemsInCart, setItemsInCart] = useImmer([]);

  return (
    <BrowserRouter>
      <Navbar
        handleVisible={() => setVisible(!visible)}
        visible={visible}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
      />
      <Cart
        visible={visible}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        items={items}
        setVisible={setVisible}
      />
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/Shopping-Cart" element={<Home items={items} />} />
        <Route
          path="/shop"
          element={
            <Shop
              setVisible={setVisible}
              items={items}
              setItems={setItems}
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
            />
          }
        />
        <Route
          path="/shop/:id"
          element={
            <Item
              items={items}
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
              setVisible={setVisible}
            />
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
