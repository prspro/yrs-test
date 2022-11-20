import { useAppDispatch } from "../../hooks/redux";
import { updateEmployeeState } from "../../store/slices/appSlice";

interface IUseEmployeeProps {
  id: string;
}
interface IUseEmployee {
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useEmployee = ({id}: IUseEmployeeProps):IUseEmployee => {
  const dispatch = useAppDispatch();
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEmployeeState({id, value: e.target.value === "true" ? true : false}));
  }

  return {handleChangeValue}
}

export default useEmployee
