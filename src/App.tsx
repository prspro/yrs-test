import EmployeeBirthday from "./components/EmployeeBirthday";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="app">
      <div className="app__employees-list">
        <h2>Employees</h2>
        <EmployeeList />
      </div>
      <div className="app__employees-birthday">
        <h2>Employees birthday</h2>
        <EmployeeBirthday />
      </div>
    </div>
  );
}

export default App;
