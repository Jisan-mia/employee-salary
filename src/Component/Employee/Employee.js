import React from "react";
import "./Employee.css";

const Employee = (props) => {
	const { employeeId, picture, name, phone, position, salary } = props.employee;
	const handleAddButton = props.handleAddButton;

	return (
		<div className="grid-employee-div">
			<div className="employee-div">
				<div className="img-div">
					<img src={picture.large} alt="" />
				</div>
				<div className="info-div">
					<p>Employee Id:</p>
					<p> {employeeId} </p>
					<p>Name</p>
					<p> {name.first + " " + name.last} </p>
					<p>Phone</p>
					<p> {phone} </p>
					<p>Position</p>
					<p className="position"> {position} </p>
					<p>Salary</p>
					<p> {salary} TK </p>
				</div>
				<button
					onClick={(e) => {
						handleAddButton(props.employee);
					}}
					className="add-btn"
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default Employee;
