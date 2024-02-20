import React, {useState} from "react";
import "./index.css";
import {modules} from "../../Database";
import {FaCheckCircle, FaEllipsisV, FaPlus, FaCaretDown} from "react-icons/fa";
import {RxDragHandleDots2} from "react-icons/rx";
import {BsFillInfoCircleFill} from "react-icons/bs";
import {useParams} from "react-router";

function ModuleList() {
    const {courseId} = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <div className="mb-3">
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <React.Fragment key={index}>
                            <ul onClick={() => setSelectedModule(module)} className="list-group module-groups">
                                <li className="list-group-item list-group-item-secondary">
                                    <RxDragHandleDots2 className="ellipse-color"/>
                                    <FaCaretDown className="icon-space2"/>
                                    {module.name}
                                    <div className="float-end">
                                        <div className="btn-group">
                                            <FaCheckCircle className="text-success icon-space dropdown-toggle"/>
                                            <ul className="dropdown-menu">
                                                {/* Dropdown items */}
                                            </ul>
                                        </div>
                                        <FaPlus className="icon-space ellipse-color"/>
                                        <FaEllipsisV className="ellipse-color"/>
                                    </div>
                                </li>
                                {selectedModule === module &&
                                    <>
                                        <li className="list-group-item left-border-line">
                                            <BsFillInfoCircleFill className="ellipse-color icon-space-head"/>
                                            {module.description}
                                        </li>
                                        {module.lessons?.map((lesson) => (
                                            <li className="list-group-item left-border-line">
                                                <RxDragHandleDots2 className="ellipse-color icon-space-head"/>
                                                {lesson.name}
                                                <i className="ellipse-color float-end"><FaEllipsisV/></i>
                                                <i className="text-success float-end icon-space"><FaCheckCircle/></i>
                                                <br/>
                                                <span className={"lesson-description"}> {lesson.description}</span>
                                            </li>
                                        ))}
                                    </>
                                }
                            </ul>
                        </React.Fragment>
                    ))
            }
        </div>
    );
}

export default ModuleList;