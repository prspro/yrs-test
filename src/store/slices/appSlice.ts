import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface appState {
  value: number;
}

const initialState: appState = {
  value: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = appSlice.actions;

export default appSlice.reducer;
