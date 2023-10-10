const cartReducer = (
  state = { items: [], totalQuantity: 0, totalPrice: 0 },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.items.find(
        (item) => item.Product_id === action.payload.Product_id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        action.payload.quantity = 1;
        state.items.push({ ...action.payload });
      }

      // Calculate the total price
      const totalPrice = state.items.reduce((total, item) => {
        return (
          total +
          parseFloat(
            item.Product_offerPrice.replace("₹", "").replace(",", "")
          ) *
            item.quantity
        );
      }, 0);

      return {
        ...state,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: totalPrice.toFixed(2),
      };

    case "INCREMENT_QUANTITY":
      const itemToIncrement = state.items.find(
        (item) => item.Product_id === action.payload
      );
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;

        // Recalculate the total price
        const updatedTotalPrice = state.items.reduce((total, item) => {
          return (
            total +
            parseFloat(
              item.Product_offerPrice.replace("₹", "").replace(",", "")
            ) *
              item.quantity
          );
        }, 0);

        return {
          ...state,
          totalQuantity: state.totalQuantity + 1,
          totalPrice: updatedTotalPrice.toFixed(2),
        };
      }
      return state;

    case "DECREMENT_QUANTITY":
      const itemToDecrement = state.items.find(
        (item) => item.Product_id === action.payload
      );
      if (itemToDecrement && itemToDecrement.quantity > 0) {
        itemToDecrement.quantity -= 1;

        // Recalculate the total price
        const updatedTotalPrice = state.items.reduce((total, item) => {
          return (
            total +
            parseFloat(
              item.Product_offerPrice.replace("₹", "").replace(",", "")
            ) *
              item.quantity
          );
        }, 0);

        return {
          ...state,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: updatedTotalPrice.toFixed(2),
        };
      }
      return state;

    case "REMOVE_FROM_CART":
      const updatedItems = state.items.filter(
        (item) => item.Product_id !== action.payload
      );

      // Recalculate the total price and total quantity
      const updatedTotalPriceAfterRemove = updatedItems.reduce(
        (total, item) => {
          return (
            total +
            parseFloat(
              item.Product_offerPrice.replace("₹", "").replace(",", "")
            ) *
              item.quantity
          );
        },
        0
      );

      const updatedTotalQuantityAfterRemove = updatedItems.reduce(
        (total, item) => {
          return total + item.quantity;
        },
        0
      );

      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedTotalQuantityAfterRemove,
        totalPrice: updatedTotalPriceAfterRemove.toFixed(2),
      };

    default:
      return state;
  }
};

export default cartReducer;
