import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../types/User';

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    clearUser: () => initialState,
    setUser: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
    },
  },
});

export const {clearUser, setUser} = userSlice.actions;

export default userSlice.reducer;
