import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selectedDish: {},
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove food (id: ${action.payload.id}) as it is not in the basket!`
        );
      }
      state.items = newBasket;
    },

    removeFromBasketById: (state, action) => {
      let foodToRemove = state.items.filter(
        (item) => item._id === action.payload.id
      );

      let newBasket = [...state.items];
      if (foodToRemove.length >= 0) {
        newBasket = newBasket.filter(
          (item) => !foodToRemove.find((x) => x._id === item._id)
        );
      } else {
        console.warn(
          `Can't remove food (id: ${action.payload._id}) as it is not in the basket!`
        );
      }
      state.items = newBasket;
    },

    emptyBasketItem: (state) => {
      state.items = [];
    },

    setSelectedDish: (state, action) => {
      state.selectedDish = action.payload;
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  emptyBasketItem,
  removeFromBasketById,
  setSelectedDish,
} = basketSlice.actions;

export const selectedBasketItems = (state) => state.basket.items;

export const selectedBasketItemsById = (state, id) => {
  state.basket.items.filter((item) => item._id === id);
};

export const selectedBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.dish_price), 0);
export const selectedDish = (state) => state.selectedDish;

export default basketSlice.reducer;
