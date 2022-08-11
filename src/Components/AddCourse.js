import React, { Fragment, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';


export default function AddCourse() {
    useEffect(()=>{
        document.title = "CourseKaro | Add Course";
    },[]);
    return (
        <Container>
            <h2 className='text-center text-primary'>Fill Course Details</h2>
            <Form className='my-3'>
                <FormGroup>
                    <Label for="exampleId">Course Id</Label>
                    <Input type="number" name="cid" id="exampleId" placeholder="Course ID" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleName">Course Name</Label>
                    <Input type="text" name="cname" id="exampleName" placeholder="Course Name" />
                </FormGroup>
                
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" name="cdesc" id="description" style={{height: 150}} placeholder='Course Description here!!'/>
                </FormGroup>
                
                <br />
                <Container className="text-center">
                    <Button color='primary'  className="mx-2">Add Course</Button>
                    <Button color='danger'  className="mx-2">Clear Form</Button>
                </Container>
            </Form>
        </Container>
    )
}

