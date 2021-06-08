import React from "react";
import firebase from "../util/Firebase";
const CourseCard = ({ course }) => {
	const deleteCourse = () => {
		const coursesRef = firebase.database().ref("courses").child(course.id);
		coursesRef.remove();
	};

	return (
		<div className="course-card">
			<div className="course-description">
				<i className="fas fa-university"></i>
				<h3> {course.courseName}</h3>
			</div>
			<p>{course.id}</p>
			<i className="fas fa-trash-alt" onClick={deleteCourse}></i>
		</div>
	);
};

export default CourseCard;
