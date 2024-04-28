import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the user slice:
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

// Create a user slice:( A slice is a collection of reducer functions, a slice is a reducer function, action creators, and selectors)
const userSlice = createSlice({
  name: 'user',
  // pass the initial state to the slice:
  initialState,
  // Define the reducer Functions:
  reducers: {
    // The following reducer function takes in state and action and as per the role of the reducer function, it sets the loading state to true/false and error to null.and sets the currentUser to the action payload.(THE DATA OF THE USER WHO IS LOGGED IN)
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signoutSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutSuccess,
} = userSlice.actions;
// userSlice.actions IS AN OBJECT THAT CONTAINS ALL THE REDUCER FUNCTIONS.

export default userSlice.reducer;
