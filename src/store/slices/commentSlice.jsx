import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addComment, fetchComments } from "../../services/apiService"

export const loadComments = createAsyncThunk(
  "comments/loadComments",
  async (postId) => {
    return await fetchComments(postId)
  }
)

export const createComment = createAsyncThunk(
  "comments/createComment",
  async (comment) => {
    return await addComment(comment)
  }
)

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.fulfilled, (state, action) => {
        state.comments = action.payload
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.comments.push(action.payload)
      })
  },
})

export default commentSlice.reducer
