import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    handleOpen: (state, action) => {
      state.isOpen = action.payload;
    }
  },
})

export const { handleOpen } = navbarSlice.actions;

export default navbarSlice.reducer;