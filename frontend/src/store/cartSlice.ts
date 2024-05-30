'use client'

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as any,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const index = state.items.findIndex((item: any) => item.id === payload.id);
      if (index !== -1) {
        if(state.items[index].qty > 0) return ;
        
        state.items[index].qty++;
        return ;
      }
      state.items.push({ ...payload, qty: state.items[index]?.qty || 1});
      return;
    },
    removeFromCart: (state, { payload }) => {
      state.items = state.items.filter((item: any) => item.id !== payload.id || !payload.id);
    },
    removeAllFromCart: (state) => {
      state.items = [];
    },
    incrementQuantity: (state, { payload }) => {
      const index = state.items.findIndex((item: any) => item.id === payload.id);

      if(index === -1) {
        // in case the item is not in the cart, we add it
        cartSlice.caseReducers.addToCart(state, cartSlice.actions.addToCart({ ...payload, qty: 1 }));
        return;
      }
      const { quantity, qty } = state.items[index];
      // in case the qty is equal to the quantity, we do nothing
      state.items[index].qty = qty == quantity ? quantity : qty + 1;
      // state.items.sort((a, b) => a.id > b.id ? 1 : -1);
    },
    decrementQuantity: (state, { payload }) => {
      const index = state.items.findIndex((item:any) => item.id === payload.id);
      // in case the item is not in the cart, we do nothing
      if(!state.items[index]) return;
      state.items[index].qty--;
      if (state.items[index].qty === 0) {
        // in case the qty is 0, we remove the item from the cart
        cartSlice.caseReducers.removeFromCart(state, cartSlice.actions.removeFromCart({
          id: payload.id, price: payload.price, qty: 0
        }));
      }
    },
    setQuantity: (state, { payload }) => {
      const index = state.items.findIndex((item:any) => item.id === payload.id);
      if(index === -1) {
        cartSlice.caseReducers.addToCart(state, cartSlice.actions.addToCart({ ...payload, qty: payload.value }));
        return ;
      };
      state.items[index].qty = payload.value;
      return ;
    },
    selectProductOptions: (state, { payload }) => {
      const index = state.items.findIndex((item:any) => item.id === payload.id);
      if (index === -1) {
        cartSlice.caseReducers.addToCart(state, cartSlice.actions.addToCart({ ...payload, qty: 1 }));
        // state.items.sort((a:any, b:any) => a.id > b.id ? 1 : -1);
        return;
      }
      state.items[index].color = payload.color ? payload.color : state.items[index].color;
      state.items[index].size = payload.size ? payload.size : state.items[index].size;
    }
  },
});

export const { addToCart, setQuantity, removeFromCart, removeAllFromCart, incrementQuantity, decrementQuantity, selectProductOptions } = cartSlice.actions;
export default cartSlice.reducer;
