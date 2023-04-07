import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductData } from '../services/product-service';
// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export  const fetchProducts: any = createAsyncThunk(
   'services/products-service',
   async () => {
     const response = await getProductData();
     // The value we return becomes the `fulfilled` action payload
     return response;
   }
);
export const productSlice = createSlice({
   name: 'products',
   initialState: {
       products: {},
       status: '',
       error: '',
   },
   reducers: {},
   extraReducers(builder) {
       builder
         .addCase(fetchProducts.pending, (state, action) => {
           state.status = 'loading'
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {
           state.status = 'succeeded'
           // Add any fetched posts to the array
           state.products = action.payload;
         })
         .addCase(fetchProducts.rejected, (state, action) => {
           state.status = 'failed'
           state.error = action?.error?.message ?? '';
         })
     }
});

export default productSlice.reducer;