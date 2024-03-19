import {Link} from "react-router-dom";
import {HiDotsVertical} from "react-icons/hi";
import {FiEdit} from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import './index.css';

function CourseItem({course, setCourse, deleteCourse}: { course: Course, setCourse: Function, deleteCourse: Function }) {
    return (
        <div key={course._id} className="course-card col-md-3 col-lg-3">
            <div className="card">
                <div className={`upper-half back-dblue`}>
                    <i className="dots"><HiDotsVertical/></i>
                    <img width={254} height={146} src={require(`../../Images/${course.image}`)} alt={course.name}/>
                </div>
                <div className="lower-half">
                    <Link to={`/Kanbas/Courses/${course._id}`}>
                        <div className={`font-dblue`}>{course.name}</div>
                        <div className="course-number">{course.number}</div>
                        <div className="course-term">{course.startDate} - {course.endDate}</div>
                        <button className={"btn btn-sm btn-danger float-end"} onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                        }}>
                            <MdDelete />
                        </button>
                    </Link>
                    <button className={"btn btn-sm btn-primary"} onClick={(event)=> {
                        event.preventDefault();
                        setCourse(course);
                    }}>
                        <FiEdit/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseItem;

export type Course = {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
}