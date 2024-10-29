import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import clinicsSlice from "./slices/clinicsSlice";
import usersSlice from "./slices/usersSlice";
import supportsSlice from "./slices/supportsSlice";
import articlesSlice from "./slices/articlesSlice";
import paymentsSlice from "./slices/paymentsSlice";
import foodsSlice from "./slices/foodsSlice";
import cartSlice from "./slices/cartSlice";
import bannerSlice from './slices/bannerSlice';

export default configureStore({
  reducer: {
    users: usersSlice,
    clinics: clinicsSlice,
    supports: supportsSlice,
    articles: articlesSlice,
    payments: paymentsSlice,
    foods: foodsSlice,
    cart: cartSlice,
    banners: bannerSlice,
  },
  middleware: () =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
