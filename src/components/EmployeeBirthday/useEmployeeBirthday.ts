import React from "react";
import { useAppSelector } from "../../hooks/redux";

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// interface IuseEmployeeBirthdayProps {}
interface IuseEmployeeBirthday {
  // monthListUpToDate: () => number[];
  datedList: {
    month: string;
    employeeList: {
      id: string;
      firstName: string;
      lastName: string;
      dob: string;
      formattedDob: string;
      isActive: boolean;
    }[];
  }[];
}

const useEmployeeBirthday = (): IuseEmployeeBirthday => {
  const employeeList = useAppSelector((state) => state.app.employeeList).filter(
    (employee) => employee.isActive
  );

  const monthListUpToDate = () => {
    const date = new Date();
    const monthIdx = date.getMonth();
    const monthList = [];
    for (let i = 0; i < 12 - monthIdx; i++) {
      monthList[i] = monthIdx + i;
    }
    return monthList;
  };

  const datedList = monthListUpToDate()
    .map((monthIdx) => {
      return {
        month: monthList[monthIdx],
        employeeList: employeeList
          .filter((employee) => {
            const employeeDob = new Date(employee.dob);
            const employeeMonthIdx = employeeDob.getMonth();
            return employeeMonthIdx === monthIdx;
          })
          .map((employee) => {
            const dob = new Date(employee.dob);
            return {
              ...employee,
              formattedDob: `${dob.getDate()} ${
                monthList[dob.getMonth()]
              } ${dob.getFullYear()} year`,
            };
          })
          .sort((a, b) => a.lastName.localeCompare(b.lastName)),
      };
    })
    .filter((month) => month.employeeList.length > 0);

  return {
    datedList,
  };
};

export default useEmployeeBirthday;
