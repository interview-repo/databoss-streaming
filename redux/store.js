import { configureStore } from "@reduxjs/toolkit";
import seriesMovies from "../redux/seriesMovies";

export default configureStore({
  reducer: {
    data: seriesMovies,
  },
  devTools: true,
});
