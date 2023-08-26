import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  logged: boolean;
  user: object[];
  token: String;
}

const initialState: AuthState = {
  logged: false,
  user: [],
  token: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.logged = true;
      state.user = action.payload.user;
      state.token = action.payload.token 
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
