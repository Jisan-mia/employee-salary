import React from "react";
import "./Calculation.css";

const Calculation = (props) => {
	const employeeCalc = props.employeeCalc;
	console.log(employeeCalc);

	// let totalSalary1 = 0;
	// for (let i = 0; i < employeeCalc.length; i++) {
	// 	totalSalary1 = totalSalary1 + employeeCalc[i].salary;
	// }

	const totalSalary = employeeCalc.reduce(
		(totalSalary, employeeCalc) => totalSalary + employeeCalc.salary,
		0
	);

	return (
		<div>
			<h3 className="main-title">Calculation:</h3>
			<div className="title">
				<h3>Total Employee: {props.length} </h3>
				<h3>Added Employee: {employeeCalc.length}</h3>
			</div>

			<div className="">
				{employeeCalc.map((addedEmoloyee) => (
					<div className="addedInfo">
						<p>{addedEmoloyee.name.first}</p>
						<p> {addedEmoloyee.salary} TK </p>{" "}
					</div>
				))}
				<div className="total">
					<p>Total Salary</p>
					<p> {totalSalary} TK </p>
				</div>
			</div>
		</div>
	);
};

export default Calculation;
