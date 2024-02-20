import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import CourseItem from "./CourseItem";

function Dashboard() {
    return (
        <div className="p-4 content-wrapper">
            <h1>Dashboard</h1> 
            <hr/>
            <h2>Published Courses ({courses.length})</h2>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <CourseItem course={course} key={course._id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;