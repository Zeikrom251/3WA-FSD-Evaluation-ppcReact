import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addPost, fetchPostById, fetchPosts } from "../../services/apiService"

export const loadPosts = createAsyncThunk("posts/loadPosts", async () => {
  return await fetchPosts()
})

export const loadPostById = createAsyncThunk(
  "posts/loadPostById",
  async (id) => {
    return await fetchPostById(id)
  }
)

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  return await addPost(post)
})

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    selectedPost: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPostById.fulfilled, (state, action) => {
        state.selectedPost = action.payload
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload
        state.status = "succeeded"
      })
      .addCase(createPost.fulfilled, (state, action) => {
        const exists = state.posts.some((post) => post.id === action.payload.id)
        if (!exists) {
          state.posts.push(action.payload)
        }
      })
  },
})

export default postSlice.reducer
