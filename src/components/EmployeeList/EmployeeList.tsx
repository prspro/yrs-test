import { FC } from "react";
import Employee from "../Employee/Employee";
import useEmployeeList from "./useEmployeeList";
import "./EmployeeList.sass";

// interface IEmployeeList {}
interface IEmployeeListProps {}

const EmployeeList: FC<IEmployeeListProps> = () => {
  const { isLoading, alphsbetList } = useEmployeeList();

  return (
    <>
      {!isLoading ? (
        <ul className="employee-list">
          {alphsbetList.map((entry, idx) => (
            <li key={idx} className="employee-list__item">
              <span className="employee-list__letter">{entry.letter}</span>
              {entry.employeeList.length > 0 ? (
                <ul className="employee-list__grid">
                  {entry.employeeList.map((employee) => (
                    <li className="employee-list__grid-item" key={employee.id}>
                      <Employee
                        id={employee.id}
                        firstName={employee.firstName}
                        lastName={employee.lastName}
                        isActive={employee.isActive}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <span>—</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
};

export default EmployeeList;
