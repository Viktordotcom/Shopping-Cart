import React from "react";
import { useParams } from "react-router";
import "./styles/Item.css";
export default function Item({
  setVisible,
  items,
  setItemsInCart,
  itemsInCart,
}) {
  let params = useParams();
  return (
    <div>
      {items.map(
        (item) =>
          item.id === params.id && (
            <div className="item" key={item.id}>
              <h3>{item.name}</h3>
              <img
                src={require(`${item.imgSource}`).default}
                alt={item.name}
              ></img>
              <div className="item-content">
                <p>
                  <strong>About this item:</strong>
                  <br /> {item.description}
                </p>
                <h1>Price: {item.price}$</h1>
                <p>
                  <strong>Rating:</strong> {item.rating.rate}{" "}
                  <strong>Count:</strong> {item.rating.count}
                </p>
              </div>
              <button
                onClick={() => {
                  setVisible(true);
                  setItemsInCart((draft) => {
                    const isDuplicateItem = itemsInCart.some(
                      (element) => element.id === item.id
                    );
                    !isDuplicateItem
                      ? draft.push(item)
                      : draft.map((targetItem) => {
                          return targetItem.id === item.id
                            ? (targetItem.inCart += 1)
                            : targetItem;
                        });
                  });
                }}
              >
                Add To Cart
              </button>
            </div>
          )
      )}
    </div>
  );
}
