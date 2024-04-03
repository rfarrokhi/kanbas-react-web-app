import React, { useState, useEffect } from "react";
import axios from "axios";
import {BASE_API_URL} from "./client";

function WorkingWithObjects() {
    
    const [assignment, setAssignment] = useState({
      _id: 123,
      title: "NodeJS HTTP Server with ExpressJS",
      description: "Create a NodeJS server with ExpressJS",
      due: "2021-10-15", 
      completed: false, 
      score: 0,
    });
    const ASSIGNMENT_URL = `${BASE_API_URL}/assignment`;
    console.log(ASSIGNMENT_URL);

    const [module, setModule] = useState({
      id: 5610, 
      name: "Web Development",
      description: " NodeJS on Web Development",
      course: "CS5610 Web Development",
    });
    const MODULE_URL = BASE_API_URL + "module"

    const fetchAssignment = async () => {
      const response = await axios.get(`${ASSIGNMENT_URL}`);
      setAssignment(response.data);
    };
    
    const updateTitle = async () => {
      const response = await axios
        .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
      setAssignment(response.data);
    };
    useEffect(() => {
      fetchAssignment();
    }, []);
  
    
    return (
      <div>
        <h3>Working With Objects</h3>
        <h3>Modifying Properties</h3>
        <input
          onChange={(e) =>
            setAssignment({
              ...assignment,
              title: e.target.value,
            })
          }
          value={assignment.title}
          className="form-control mb-2"
          type="text"
        />
        <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
          Update Title to: {assignment.title}
        </button>
        <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
          Fetch Assignment
        </button>
  
        <h4>Modifying Properties</h4>
        <a
          href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
          className="btn btn-primary me-2 float-end"
        >
          Update Title
        </a>
        <input
          type="text"
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          value={assignment.title}
          className="form-control mb-2 w-75"
        />

<div className="form-control mb-2">
        <div className="row">
          <div className="col-sm-2">
          <input type="text" className="form-control mb-2"
            onChange={(e) => setModule({ ...module,
                name: e.target.value })}
            value={module.name}/>
          </div>
          <div className="col-sm-2">
          <a href={`${MODULE_URL}/name/${module.name}`} className="btn btn-danger">
            Update Module Name
          </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
          <input type="text" className="form-control"
            onChange={(e) => setModule({ ...module,
                description: e.target.value })}
            value={module.description}/>
          </div>
          <div className="col-sm-2">
          <a href={`${MODULE_URL}/description/${module.description}`} className="btn btn-danger">
            Update Description
          </a>
          </div>
        </div>
      </div>
  
        <h4>Retrieving Objects</h4>
        <a
          href={`${BASE_API_URL}/assignment`}
          className="btn btn-primary me-2"
        >
          Get Assignment
        </a>
        <h4>Retrieving Properties</h4>
        <a
          className="btn btn-primary me-2"
          href={`${BASE_API_URL}/assignment/title`}
        >
          Get Title
        </a>

        <a href={`${BASE_API_URL}/module/name`} className="btn btn-danger">
          Get Module Name
        </a>

      </div>
    );
  }

export default WorkingWithObjects;