import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizza = createAsyncThunk('pizza/fetchByIdStatus', async (params) => {
  const { category, order, sortBy, search, currentPage } = params;
  const { data } = await axios.get(
    `https://6508872656db83a34d9c788f.mockapi.io/items?page=${currentPage}${search}&limit=4&${category}&sortBy=${sortBy}&order=${order}`,
  );

  return data;
});

const initialState = {
  items: [],
  status: '',
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.items = [];
        state.status = 'loading';
      })
      .addCase(fetchPizza.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchPizza.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
