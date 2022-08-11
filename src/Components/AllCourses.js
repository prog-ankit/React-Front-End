import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import Course from './Course'
// import axios from axios;


const AllCourses = () => {
    useEffect(()=>{
        document.title = "CourseKaro || All Courses"
    },[]);

    // const showChange = () => {
    //     setCourse([...courses, { title: "C Course", description: "This is C Course" }])
    // }
    const [courses, setCourse] = useState([
        { id: 100 ,title: "Java Course", description: "This is Java Course" },
        { id: 101 ,title: "Python Course", description: "This is Python Course" },
        { id: 102 ,title: "C++ Course", description: "This is C++ Course" }]);
    return (
        <div>
            <h1 className='text-primary'>
                All Courses
            </h1>
            {/* <p><Button color='primary' onClick={showChange}>Update Button</Button></p> */}
            <p className='text-primary'>List of all available courses</p>
            <p>{
                courses.length > 0 ? courses.map((element) => <Course course={element} />) : "No Courses Available"
            }</p>
        </div>
    )
}

export default AllCourses
