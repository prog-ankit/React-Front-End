import React from 'react'
import { useState, useEffect } from 'react'
import Course from './Course'
import axios from 'axios';
import base_url from '../api/bootapi';
const AllCourses = () => {
    useEffect(()=>{
        document.title = "CourseKaro || All Courses"
        getAllCourses();
    },[]);
const updateCourses = (id) =>{
    setCourse(courses.filter((c) => c.id !== id));
}
const [courses, setCourse] = useState([]);
    const getAllCourses = () => {
       axios.get(`${base_url}/courses`).then(
        (response) => {
            console.log(response.data);
            setCourse(response.data);
        },
        (error) => {
            console.log(error);
        }
       ) 
    };
    return (
        <div>
            <h1 className='text-primary'>
                All Courses
            </h1>
            <p className='text-primary'>List of all available courses</p>
    
            {
                courses.length > 0 ? courses.map((element) => <Course key={element.id} course={element} update={updateCourses} />) : "No Courses Available"
    
            }
          
        </div>
    )
}

export default AllCourses
