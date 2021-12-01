const Cart = ({ visible, setVisible, itemsInCart, setItemsInCart }) => {
  const items = itemsInCart;
  return itemsInCart.length > 0 ? (
    <div className={visible ? "sidebar visible" : "sidebar"}>
      <span className="material-icons" onClick={() => setVisible(false)}>
        close
      </span>
      <div className="cart-items-container">
        <form>
          {items.map((item) => {
            const currentItem = itemsInCart.find(
              (inputItem) => inputItem.id === item.id
            );
            return (
              <div className="image-container" key={item.id}>
                <img
                  src={require(`${item.imgSource}`).default}
                  alt={item.name}
                ></img>
                <p>{item.name}</p>

                <div className="cart-inputs">
                  <span
                    className="material-icons"
                    onClick={(e) => {
                      e.preventDefault();
                      setItemsInCart((draft) => {
                        const index = draft.findIndex(
                          (todo) => todo.id === item.id
                        );
                        draft.map((targetItem) => {
                          if (targetItem.id === item.id) {
                            if (targetItem.inCart < 1) {
                              if (index !== -1) draft.splice(index, 1);
                            }
                            return (targetItem.inCart -= 1);
                          }
                          return targetItem;
                        });
                      });
                    }}
                  >
                    remove
                  </span>
                  <input
                    type="text"
                    value={item.inCart}
                    pattern="[0-9]+"
                    onChange={(e) => {
                      setItemsInCart((draft) => {
                        draft.map((targetItem) => {
                          return targetItem.id === item.id
                            ? (targetItem.inCart =
                                e.target.value.match(/^[0-9]*$/))
                            : targetItem;
                        });
                      });
                    }}
                  />
                  {item.inCart}
                  <span
                    className="material-icons"
                    onClick={(e) => {
                      e.preventDefault();
                      setItemsInCart((draft) => {
                        draft.map((targetItem) => {
                          if (targetItem.id === item.id) {
                            return (targetItem.inCart += 1);
                          }
                          return targetItem;
                        });
                      });
                    }}
                  >
                    add
                  </span>
                </div>
                <button
                  className="make-order-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    const currentItem = itemsInCart.find(
                      (inputItem) => inputItem.id === item.id
                    );
                    const isValidInput = String(currentItem.inCart).match(
                      /^[0-9]*$/
                    );

                    if (isValidInput && currentItem.inCart > 0) {
                      alert(
                        `Thank you for ordering ${
                          currentItem.inCart > 1 ? currentItem.inCart : ""
                        } ${currentItem.inCart > 1 ? "pieces" : "piece"} of ${
                          currentItem.name
                        } for ${currentItem.inCart * currentItem.price}$`
                      );
                      setItemsInCart((draft) => {
                        const index = draft.findIndex(
                          (todo) => todo.id === item.id
                        );
                        draft.splice(index, 1);
                      });
                    } else {
                      alert("Please enter valid amount");
                    }
                  }}
                >
                  MAKE ORDER
                </button>
                <p>{currentItem.inCart * currentItem.price}$</p>
              </div>
            );
          })}
        </form>
      </div>
      <h3>
        Total of: {itemsInCart.reduce((a, b) => a + b.price * b.inCart, 0)}$
      </h3>
    </div>
  ) : (
    <div className={visible ? "sidebar visible" : "sidebar"}>
      <span className="material-icons" onClick={() => setVisible(false)}>
        close
      </span>

      <h1>No items in cart!</h1>
    </div>
  );
};
export default Cart;
