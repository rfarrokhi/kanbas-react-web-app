import React, {useEffect} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import {assignments} from "../../../Database";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";

function AssignmentEditor({setBreadcrumb} : any) {
    const {assignmentId} = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    useEffect(() => {
        setBreadcrumb(`Assignments > ${assignment?.title}`);

        return () => {
            setBreadcrumb("Assignments");
        }
    },[]);

    return (
        <div className="col-md-9 right-content">
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-light float-right">
                        <i className="black-color"><FaEllipsisV/></i>
                    </button>
                    <button type="button" className="published-button-setup float-right button-margin">
                        <i className="button-color"><FaCheckCircle/></i>
                        <span className="button-color"><b>Published</b></span>
                    </button>
                </div>
            </div>
            <hr/>
            <h2>Assignment Name</h2>
            <input defaultValue={assignment?.title}
                   className="form-control mb-2"/>
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-danger float-end" >
                <span style={{color: "white"}}>Cancel</span>
            </Link>
        </div>
    );
}

export default AssignmentEditor;