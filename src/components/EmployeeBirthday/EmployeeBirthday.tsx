import { FC } from "react";
import useEmployeeBirthday from "./useEmployeeBirthday";
import "./EmployeeBirthday.sass";

type IEmployeeBirthdayProps = {};

const EmployeeBirthday: FC<IEmployeeBirthdayProps> = () => {
  const { datedList, isDatedListEmpty } = useEmployeeBirthday();

  return (
    <>
      {!isDatedListEmpty ? (
        <ul className="employee-birthday">
          {datedList.map((entry, idx) => (
            <li key={idx} className="employee-birthday__item">
              <span className="employee-birthday__month">{entry.month}</span>
              <ul className="employee-birthday__list">
                {entry.employeeList.map((employee) => (
                  <li key={employee.id}>
                    {`${employee.lastName} ${employee.firstName} - ${employee.formattedDob}`}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Employees List is empty</p>
      )}
    </>
  );
};

export default EmployeeBirthday;
