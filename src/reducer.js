export const initialState = {
  basket: [],
  user: null,
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let tempBasket = [...state.basket];
      if (index >= 0) {
        tempBasket.splice(index, 1);
      } else {
        console.warn("Can't remove product with id - ${action.id}");
      }
      return {
        ...state,
        basket: tempBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
  }
};

export default reducer;
