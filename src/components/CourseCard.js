import React from "react";
import gradCap from "../images/qual.png";
import deleteImg from "../images/delete.png";
const CourseCard = (props) => {
	console.log("You came here", props.course);

	return (
		<div className="course-card">
			<div className="course-description">
				<i className="fas fa-university"></i>
				<h3> {props.course.courseName}</h3>
			</div>
			<p>{props.course.id}</p>
			<i className="fas fa-trash-alt"></i>
		</div>
	);
};

export default CourseCard;
