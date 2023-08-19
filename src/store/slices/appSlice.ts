import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "../../hooks/redux";

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
  async () => {
    const res = await axios.get<
      {
        id: string;
        first_name: string;
        last_name: string;
        date_of_birth: string;
        isActive: boolean;
      }[]
    >("https://random-data-api.com/api/v2/users?size=25");

    return res.data.map((entry) => {
      return {
        id: entry.id,
        isActive: false,
        firstName: entry.first_name,
        lastName: entry.last_name,
        dob: entry.date_of_birth,
      };
    });
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
      // localStorage.setItem("appData", JSON.stringify(state.employeeList));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployeeList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getEmployeeList.fulfilled,
      (state, action: PayloadAction<IEmployee[]>) => {
        state.isLoading = false;
        state.error = "";
        state.employeeList = action.payload || [];
      }
    );
    builder.addCase(getEmployeeList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "error";
      state.employeeList = [];
    });
  },
});

export const { updateEmployeeState } = appSlice.actions;

export default appSlice.reducer;
