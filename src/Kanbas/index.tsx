import KanbasNavigation from "./Navigation";
import {Navigate, Route, Routes} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import {useState} from "react";
import {courses as coursesDB} from "./Database";
import store from "./store";
import {Provider} from "react-redux";

function Kanbas() {

    const [courses, setCourses] = useState(coursesDB);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "reactjs.png"
    });

    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString()
        };
        setCourses([...courses, {...course, ...newCourse}]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation/>
                <div style={{flexGrow: 1}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard"/>}/>
                        <Route path="Account" element={<Account/>}/>
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                        }/>
                        <Route path="Courses/:courseId/*" element={
                            <Courses courses={courses}/>
                        }/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;