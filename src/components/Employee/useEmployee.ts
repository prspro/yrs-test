import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { updateEmployeeState } from "../../store/slices/appSlice";

interface IUseEmployeeProps {
  id: string;
}
interface IUseEmployee {
  // isActive: boolean;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useEmployee = ({id}: IUseEmployeeProps):IUseEmployee => {

  const dispatch = useAppDispatch();
  // const isActive = useAppSelector(state => state.app.employeeList).find(entry => entry.id === id)?.isActive || false;

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEmployeeState({id, value: e.target.value === "true" ? true : false}));
  }

  return {handleChangeValue}
}

export default useEmployee