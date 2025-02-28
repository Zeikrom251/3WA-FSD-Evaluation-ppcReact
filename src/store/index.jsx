import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./slices/postsSlice"
import commentReducer from "./slices/commentSlice"

const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
  },
})

export default store
