import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  isActive: boolean;
}

interface IAppState {
  employeeList: IEmployee[];
  isLoading: boolean;
  error: string;
}

const initialState: IAppState = {
  employeeList: [],
  isLoading: false,
  error: "",
};

export const getEmployeeList = createAsyncThunk(
  "app/getEmployeeList",
  async (_, thunkAPI) => {
    try {
      const localStorageData = localStorage.getItem("appData");

      if (!localStorageData) {
        const response = await axios.get<IEmployee[]>(
          "https://yalantis-react-school-api.yalantis.com/api/task0/users"
        );
        return response.data.map((entry) => {
          return { ...entry, isActive: false };
        });
      } else {
        return JSON.parse(localStorageData);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateEmployeeState: (
      state,
      action: PayloadAction<{ id: string; value: boolean }>
    ) => {
      state.employeeList = state.employeeList.map((entry) => {
        return entry.id === action.payload.id
          ? { ...entry, isActive: action.payload.value }
          : entry;
      });
      localStorage.setItem("appData", JSON.stringify(state.employeeList));
    },
  },
  extraReducers: {
    [getEmployeeList.fulfilled.type]: (
      state,
      action: PayloadAction<IEmployee[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.employeeList = action.payload;
    },
    [getEmployeeList.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getEmployeeList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { updateEmployeeState } = appSlice.actions;

export default appSlice.reducer;
