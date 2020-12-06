import React, { useEffect, useState } from "react";
import data from "../../Data/fakeData.json";
import Calculation from "../Calculation/Calculation";
import Employee from "../Employee/Employee";
import "./EmployeeContainer.css";
const EmployeeContainer = () => {
	const [employees, setEmployees] = useState([]);
	const [employeeCalc, setEmployeeCalc] = useState([]);

	useEffect(() => {
		setEmployees(data);
	}, []);

	const handleAddButton = (employee) => {
		const newEmployeeCalc = [...employeeCalc, employee];
		setEmployeeCalc(newEmployeeCalc);
	};
	// employees.map((employee) => console.log(employee));
	return (
		<div className="employee-container">
			<div className="employees">
				{employees.map((employee) => (
					<Employee
						handleAddButton={handleAddButton}
						employee={employee}
						employeeCalc={employeeCalc}
					></Employee>
				))}
			</div>

			<div className="calculation">
				<Calculation
					length={employees.length}
					employeeCalc={employeeCalc}
				></Calculation>
			</div>
		</div>
	);
};

export default EmployeeContainer;
