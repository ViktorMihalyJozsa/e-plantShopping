import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {

    // Add a product to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      // Check if the product already exists
      const existingItem = state.items.find(
        item => item.name === name
      );

      if (existingItem) {
        // Increase quantity if product already exists
        existingItem.quantity++;
      } else {
        // Add new product with quantity 1
        state.items.push({
          name,
          image,
          cost,
          quantity: 1
        });
      }
    },

    // Remove a product from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.name !== action.payload
      );
    },

    // Update product quantity
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find(
        item => item.name === name
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },

  },
});

// Export Redux actions
export const {
  addItem,
  removeItem,
  updateQuantity
} = CartSlice.actions;

// Export reducer
export default CartSlice.reducer;
