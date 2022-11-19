import { FC } from "react";
import "./Employee.sass";
import useEmployee from "./useEmployee";

type IEmployeeProps = {
  id: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
};

const Employee: FC<IEmployeeProps> = ({
  id,
  firstName,
  lastName,
  isActive,
}) => {
  const { handleChangeValue } = useEmployee({ id });

  return (
    <div className="employee">
      <p className="employee__name">{lastName + " " + firstName}</p>
      <form className="employee__form" action="/">
        <label className="employee__input-wrap">
          <input
            type="radio"
            // name="isActive"
            value="false"
            checked={!isActive}
            onChange={handleChangeValue}
          />
          <span>not active</span>
        </label>
        <label className="employee__input-wrap">
          <input
            type="radio"
            // name="isActive"
            value="true"
            checked={isActive}
            onChange={handleChangeValue}
          />
          <span>active</span>
        </label>
      </form>
    </div>
  );
};

export default Employee;
