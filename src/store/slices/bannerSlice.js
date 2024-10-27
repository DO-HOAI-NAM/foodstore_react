import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import bannerAPI from "../../api/banner";

export const fetchBanners = createAsyncThunk(
  "bannerSlice/fetchBanners",
  async () => {
    try {
      const result = await bannerAPI.getAll();
      return result.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

// Reducer
const bannersSlice = createSlice({
  name: "bannerSlice",
  initialState: {
    banners: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {

    // Fetch bah
    [fetchBanners.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchBanners.fulfilled]: (state, action) => {
      state.banners = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchBanners.rejected]: (state, action) => {
      message.error(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

// Selector
export const selectBanners = (state) => {
  // state.banners.banners
  console.log('state', state);
  return state.banners.banners
}
export const selectBannersIsLoading = (state) =>
  state.banners.isLoading;

export default bannersSlice.reducer;
