import {
  createSlice,
  PayloadAction,
  AsyncThunkAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "..";

interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
}

interface appState {
  personList: IPerson[];
  isLoading: boolean;
  error: string;
}

const initialState: appState = {
  personList: [],
  isLoading: false,
  error: "",
};

export const getPersonList = createAsyncThunk(
  "app/getPersonList",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IPerson[]>(
        "https://yalantis-react-school-api.yalantis.com/api/task0/users"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: {
    [getPersonList.fulfilled.type]: (
      state,
      action: PayloadAction<IPerson[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.personList = action.payload;
    },
    [getPersonList.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getPersonList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default appSlice.reducer;
