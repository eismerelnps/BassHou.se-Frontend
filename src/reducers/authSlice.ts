import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  logged: boolean;
  user: object[]
}

const initialState: AuthState = {
  logged: false,
  user: []
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.logged = true;
      state.user = action.payload; 
    },
    logout: (state) => {
      state.logged = false;
      state.user = [];
    },
  },
});

export const {
  login,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
