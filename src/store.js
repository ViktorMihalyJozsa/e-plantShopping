import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// Export store
export default store;
