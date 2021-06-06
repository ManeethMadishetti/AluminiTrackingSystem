import {createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state,action) => {

      state.value = action.payload;
      console.log(state.value);
    },
    logout: (state) => {
      state.user = null;
    },
  
    
  },
  
  
});

export const { login,logout } = userSlice.actions;
//selectors
export const selectUser = (state) => state.user;

export default userSlice.reducer;
