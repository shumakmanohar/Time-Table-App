import React, { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import CourseList from "../components/CourseList";
import NavBar from "../components/NavBar";
import firebase from "../util/Firebase";
import { v4 as uuidv4 } from "uuid";

const AdminPage = () => {
	const [courseName, setCourseName] = useState("");
	const [courses, setCourses] = useState();

	useEffect(() => {
		const timeTableRef = firebase.database().ref("courses");
		timeTableRef.on("value", (snapshot) => {
			const course = snapshot.val();
			const courses = [];
			for (let id in course) {
				console.log(id);
				//console.log(course[id]);
				courses.push(course[id]);
			}
			setCourses(courses);
		});
	}, []);

	const handleChange = (e) => {
		setCourseName(e.target.value);
	};

	const addNewCourse = () => {
		const timeTableRef = firebase.database().ref("courses");
		const course = {
			courseUUID: uuidv4(),
			courseName: courseName,
		};
		//Pushing to Database
		timeTableRef.push(course);
	};
	return (
		<div>
			<NavBar />
			<div className="admin-container">
				<h3>Helllo, Admin</h3>
				<div className="courses-panel">
					<h4>COURSES</h4>
					<div className="add-newCourse-container">
						<input
							type="text"
							name="coursename"
							placeholder="Course Name"
							onChange={handleChange}
							value={courseName}
						/>
						<button onClick={addNewCourse}>Add new course</button>
					</div>
					<div className="course">
						<CourseList courses={courses} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
