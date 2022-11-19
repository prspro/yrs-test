import {useEffect} from 'react';
import Person from './components/Person';
import { getPersonList } from './store/slices/appSlice';
import { useAppDispatch } from './hooks/redux';

function App() {
const dispatch = useAppDispatch();

  // const personList = useSelector((state: RootState) => state.app.personList);
  // const isLoading = useSelector((state: RootState) => state.app.isLoading);

  useEffect(() => {
    dispatch(getPersonList())
  }, [])
  

  return (
    <div className="App">
      <Person />
    </div>
  );
}

export default App;
