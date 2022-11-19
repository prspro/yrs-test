import EmployeeBirthday from "./components/EmployeeBirthday";
import EmployeeList from "./components/EmployeeList";

function App() {

  return (
    <div className="app">
      <div className="app__employees-list">
        <EmployeeList />
      </div>
      <div className="app__employees-birthday">
        <EmployeeBirthday />
      </div>
    </div>
  );
}

export default App;
