import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios';
import base_url from '../api/bootapi';

export default function AddCourse() {
    useEffect(() => {
        document.title = "CourseKaro | Add Course";
    }, []);

    const [course, setCourse] = useState({});
    const addCourse = (e) => {
        // console.log(course);
        postData();
        e.preventDefault();
    }
    const clearForm = () => {
        setCourse({});
        document.getElementById("id");
    }
    const postData = () => {
        axios.post(`${base_url}/courses`, course).then(
            (response) => {
                console.log(response);
                toast.success("Course Added Success");
                console.log("Success Adding Data");
            },
            (error) => {

                console.log(error);
            }
        );
    }
    return (
        <Container>
          
            <h2 className='text-center text-primary'>Fill Course Details</h2>
            <Form onSubmit={addCourse} className='my-3'>
                <FormGroup>
                    <Label for="exampleId">Course Id</Label>
                    <Input type="number" name="cid" id="id" placeholder="Course ID"
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value })
                        }} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleName">Course Name</Label>
                    <Input type="text" name="cname" id="courseName" placeholder="Course Name"
                        onChange={(e) => {
                            setCourse({ ...course, courseName: e.target.value })
                        }} />
                </FormGroup>

                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" name="cdesc" id="courseDesc" style={{ height: 150 }} placeholder='Course Description here!!'
                        onChange={(e) => {
                            setCourse({ ...course, courseDesc: e.target.value })
                        }}
                    />
                </FormGroup>

                <br />
                <Container className="text-center">
                    <Button type="submit" color='primary' className="mx-2">Add Course</Button>
                    <Button color='danger' className="mx-2" type='reset'>Clear Form</Button>
                </Container>
            </Form>
            <ToastContainer />
        </Container>
    )
}

