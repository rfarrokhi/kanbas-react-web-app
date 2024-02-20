import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import './index.css';
import AssignmentsList from "./List";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="col-md-9 right-content">
            <div className="row">
                <div className="col-7">
                    <input type="text" className="form-control margin-top input-width"
                           placeholder="Search for Assignments" id="Assignment-Names"/>
                </div>
                <div className="col-5 margin-top">
                    <button type="button" className="btn btn-light float-right">
                        <i className=" black-color"><FaEllipsisV/></i>
                    </button>
                    <button type="button" className="btn btn-danger float-right" style={{marginRight: 10}}>+
                        Assignment
                    </button>
                    <button type="button" className="btn btn-light float-right" style={{marginRight: 10}}>+ Group
                    </button>

                    <div className="dropdown-menu ">
                        <button className="dropdown-item" type="button" id="edit-assignment-dates">Edit Assignment
                            Dates
                        </button>
                        <button className="dropdown-item" type="button" id="speed-grader">Speed Grader</button>
                    </div>
                </div>
            </div>
            <hr/>
            <AssignmentsList/>
        </div>
    );
}

export default Assignments;