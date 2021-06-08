import React, { useState } from "react";
import CourseCard from "./CourseCard";

const CourseList = (props) => {
	const courses = props.courses;
	return (
		<div className="course-list">
			{courses
				? courses.map((course) => <CourseCard course={course} />)
				: "No courses Found"}
		</div>
	);
};

export default CourseList;
