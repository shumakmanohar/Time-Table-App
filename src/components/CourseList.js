import React, { useState } from "react";
import CourseCard from "./CourseCard";

const CourseList = (props) => {
	const courses = props.courses;
	return (
		<div className="course-list">
			{courses
				? courses.map((course, index) => (
						<CourseCard course={course} key={index} />
				  ))
				: "No courses Found"}
		</div>
	);
};

export default CourseList;
