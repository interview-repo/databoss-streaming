import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { groupBy } from "../lib/useSort";
const wait = async (ms) => new Promise((rs) => setTimeout(rs, ms));

export const getData = createAsyncThunk("data", async (_, thunkAPI) => {
  try {
    await wait(4000);
    const response = await fetch("/api/series-movies");
    const json = await response.json();
    const data = groupBy(json.entries, "programType");

    return {
      data: {
        series: {
          title: "Popular Series",
          data: data.series,
        },
        movies: {
          title: "Popular Movies",
          data: data.movie,
        },
      },
      total: json.total,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue({
      error: "Oopss, something went wrong...",
    });
  }
});

const seriesMovies = createSlice({
  name: "data",
  initialState: {
    seriesMovies: false,
    loading: "Loading...",
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.seriesMovies = action.payload.data;
      state.loading = false;
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const selectList = createSelector(
  (state) => ({
    loading: state.data.loading,
    response: state.data.seriesMovies,
    error: state.data.error,
  }),
  (state) => state
);

export default seriesMovies.reducer;
