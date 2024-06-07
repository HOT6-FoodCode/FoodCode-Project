import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const posts = await api.posts.getAllPosts();
  return posts.filter((post) => post !== null && post !== undefined);
});

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
  const createdPost = await api.posts.createPost(post);
  return createdPost;
});

export const updatePost = createAsyncThunk('posts/updatePost', async ({ postId, updatedPost }) => {
  await api.posts.editPost(postId, updatedPost);
  return { postId, updatedPost };
});

export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
  await api.posts.deletePost(postId);
  return postId;
});

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
  const newPost = await api.posts.createPost(post);
  return newPost;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
  await api.posts.deletePost(postId);
  return postId;
});

export const editPost = createAsyncThunk('posts/editPost', async ({ postId, updatedPost }) => {
  await api.posts.editPost(postId, updatedPost);
  return { postId, ...updatedPost };
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {

        state.posts.unshift(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(editPost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post.id === action.payload.postId);
        if (index !== -1) {
          state.posts[index] = { ...state.posts[index], ...action.payload };
        }

      });
  }
});

export default postsSlice.reducer;
