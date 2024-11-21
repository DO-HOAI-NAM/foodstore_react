import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import foodAPI from "../../api/food";

export const fetchAll = createAsyncThunk("foodsSlice/fetchAll", async () => {
  try {
    const result = await foodAPI.getAll();
    console.log('result', result)
    return result.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

export const addWatch = createAsyncThunk(
  "foodsSlice/addWatch",
  async (food_id) => {
    try {
      const result = await foodAPI.addWatch({
        product_id: parseInt(food_id),
      });
      return {
        data: result.data,
        product_id: food_id,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "foodsSlice/addFavorite",
  async (food_id) => {
    try {
      const result = await foodAPI.addFavorite({
        product_id: parseInt(food_id),
      });
      return {
        data: result.data,
        product_id: parseInt(food_id),
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const checkFood = createAsyncThunk(
  "foodsSlice/checkFood",
  async (food_id) => {
    try {
      const result = await foodAPI.checkFood(food_id);
      return {
        data: result.data,
        product_id: food_id,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const fetchSaleoff = createAsyncThunk(
  "foodsSlice/fetchSaleoff",
  async () => {
    try {
      const result = await foodAPI.getSaleoff();
      return result.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const fetchOneFood = createAsyncThunk(
  "foodsSlice/fetchOneFood",
  async (food_id) => {
    try {
      const result = await foodAPI.getOne(food_id);
      return result.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const fetchBestSeller = createAsyncThunk(
  "foodsSlice/fetchBestSeller",
  async () => {
    try {
      const result = await foodAPI.getBestSeller();
      return result.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const fetchNewest = createAsyncThunk(
  "foodsSlice/fetchNewest",
  async () => {
    try {
      const result = await foodAPI.getNewest();
      return result.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const commentFood = createAsyncThunk(
  "foodsSlice/commentFood",
  async (data) => {
    try {
      const result = await foodAPI.commentFood(data);
      return result.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const fetchComment = createAsyncThunk(
  "foodsSlice/fetchComment",
  async (food_id) => {
    try {
      const result = await foodAPI.getComment(food_id);
      return result.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

export const fetchAllCategoryFood = createAsyncThunk(
  "foodsSlice/fetchAllCategoryFood",
  async () => {
    try {
      const result = await foodAPI.getAllCategory();
      return result.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

// Reducer
const foodsSlice = createSlice({
  name: "foodsSlice",
  initialState: {
    foods: [],
    favorite: [],
    watch: [],
    foodCategory: [],
    saleoff: [],
    bestSellerFoods: [],
    newestFoods: [],
    foodNeedUpdate: {},
    searchTerm: "",
    searchCategory: "",
    isLoading: false,
    hasError: false,
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    changeSearchCategory: (state, action) => {
      state.searchCategory = action.payload;
    },
  },
  extraReducers: {
    // Fetch All
    [fetchAll.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchAll.fulfilled]: (state, action) => {
      let arr = [
        ...action.payload,
        ...action.payload.sort(() => Math.random() - 0.5),
      ];
      state.foods = arr;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchAll.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Fetch Trending
    [fetchSaleoff.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchSaleoff.fulfilled]: (state, action) => {
      state.saleoff = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchSaleoff.rejected]: (state, action) => {
      // message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Fetch Best Seller
    [fetchBestSeller.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchBestSeller.fulfilled]: (state, action) => {
      state.bestSellerFoods = [...action.payload];
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchBestSeller.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Fetch Newest
    [fetchNewest.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchNewest.fulfilled]: (state, action) => {
      state.newestFoods = [...action.payload];
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchNewest.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Fetch One Food
    [fetchOneFood.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchOneFood.fulfilled]: (state, action) => {
      state.foodNeedUpdate = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchOneFood.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Checkfood
    [checkFood.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [checkFood.fulfilled]: (state, action) => {
      const { watch, favorites } = action.payload.data || {};
    
      if (watch && !state.watch.includes(watch)) {
        state.watch.push(watch);
      }
    
      if (favorites) {
        favorites.forEach((favorite) => {
          if (!state.favorite.includes(favorite)) {
            state.favorite.push(favorite);
          }
        });
      }
    
      state.isLoading = false;
      state.hasError = false;
    },    
    [checkFood.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Add watch
    [addWatch.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addWatch.fulfilled]: (state, action) => {
      const watch = action.payload.product_id;

      if (!state.watch.includes(watch)) state.watch.push(watch);

      message.success("Subscribe to this item successfully");

      state.isLoading = false;
      state.hasError = false;
    },
    [addWatch.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // Add Favorite
    [addFavorite.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addFavorite.fulfilled]: (state, action) => {
      const favorite = action.payload.product_id;
    
      if (!state.favorite.includes(favorite)) {
        state.favorite = [...new Set([...state.favorite, favorite])];
      }
    
      message.success("Added favorite to this item successfully");
      state.isLoading = false;
      state.hasError = false;
    },
    
    [addFavorite.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // CommentFood
    [commentFood.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [commentFood.fulfilled]: (state, action) => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      state.foodNeedUpdate.comments.unshift({
        ...action.payload,
        avatar: currentUser.davatar,
        full_name: currentUser.name,
      });

      message.success("Added comment to this item successfully");
      state.isLoading = false;
      state.hasError = false;
    },
    [commentFood.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
    // fetch all category food
    [fetchAllCategoryFood.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchAllCategoryFood.fulfilled]: (state, action) => {
      state.foodCategory = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchAllCategoryFood.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
  },
});
// Selector
export const selectFoods = (state) => state.foods.foods;

export const selectsaleoff = (state) => state.foods.saleoff;

export const selectCategoryFood = (state) => state.foods.foodCategory;

export const selectBestSellerFoods = (state) => state.foods.bestSellerFoods;

export const selectNewestFoods = (state) => state.foods.newestFoods;

export const selectFoodNeedUpdate = (state) => state.foods.foodNeedUpdate;

export const selectFoodWatch = (state) => state.foods.watch;

export const selectFoodFavorite = (state) => state.foods.favorite;


export const selectFoodIsLoading = (state) => state.foods.isLoading;

export const selectSearchTerm = (state) => state.foods.searchTerm;

export const selectSearchCategory = (state) => state.foods.searchCategory;

export const selectFilteredFoodGrid = (state) => {
  const searchCategory = selectSearchCategory(state);
  const searchTerm = selectSearchTerm(state);
  const foods = selectFoods(state);

  if (searchTerm === "" && searchCategory === "") {
    return foods;
  }

  return foods.filter((item) => {
    let result = true;

    console.log(
      'item', item,
    )
    // Check includes name
    if (!item.product_name.toLowerCase().includes(searchTerm.toLowerCase()))
      return (result = false);

    // Check category

    console.log('test', searchCategory)
    console.log('test2', item)

    if (searchCategory !== "" && item.category_name !== searchCategory)
      return (result = false);

    return result;
  });
};

export const { changeSearchCategory, changeSearchTerm } = foodsSlice.actions;

export default foodsSlice.reducer;
