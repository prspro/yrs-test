import { FC } from "react";
import "./Employee.sass";
import useEmployee from "./useEmployee";
import classNames from "classnames";

type IEmployeeProps = {
  id: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  className?: string;
};

const Employee: FC<IEmployeeProps> = ({
  id,
  firstName,
  lastName,
  isActive,
  className,
}) => {
  const { handleChangeValue } = useEmployee({ id });

  return (
    <div className={classNames("employee", className, {"active": isActive})}>
      <p className="employee__name">{lastName + " " + firstName}</p>
      <form className="employee__form" action="/">
        <label className="employee__input-wrap">
          <input
            type="radio"
            value="false"
            checked={!isActive}
            onChange={handleChangeValue}
          />
          <span>not active</span>
        </label>
        <label className="employee__input-wrap">
          <input
            type="radio"
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
