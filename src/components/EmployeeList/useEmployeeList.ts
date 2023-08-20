import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { getEmployeeList } from "../../store/slices/appSlice";
import { AsyncThunkAction } from "@reduxjs/toolkit";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

interface IUseEmployeeList {
  isLoading: boolean;
  alphsbetList: {
    letter: string;
    employeeList: {
      id: string;
      firstName: string;
      lastName: string;
      dob: string;
      isActive: boolean;
    }[];
  }[];
}

interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  isActive: boolean;
}


const useEmployeeList = (): IUseEmployeeList => {
  const dispatch = useAppDispatch();
  const employeeList = useAppSelector((state) => state.app.employeeList);
  const isLoading = useAppSelector((state) => state.app.isLoading);

  useEffect(() => {
    dispatch<any>(getEmployeeList())
  }, [])

  const alphsbetList = alphabet.split("").map((letter) => {
    return {
      letter: letter,
      employeeList: employeeList
        .filter(
          (employee) =>
            employee.lastName[0].toLowerCase() === letter.toLowerCase()
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName)),
    };
  });

  return { isLoading, alphsbetList };
};

export default useEmployeeList;
