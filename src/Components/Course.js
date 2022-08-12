import React from 'react'
import {
    Card, CardBody, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';
// var i=0;
export default function Course({ course,update }) {

    const deleteCourse = (id) => {
        // let result = window.confirm("Are you sure you want to delete the course?");
        // if(result === true){
        console.log(id);
        if (window.confirm("Are you sure you want to delete the course?")) {
            console.log("Tre");
            axios.delete(`${base_url}/course/${id}`).then(
                (response) => {
                    console.log("Deleted Success!!");
                    update(id);
                }, (error) => {
                    console.log(error);
                }
            )
        }
        else{
            console.log("Else");
        }
    };
    return (
        <div>
            <Card className='text-center my-2 p-3'>
                <CardSubtitle><b>{course.courseName}</b></CardSubtitle>
                <CardBody>{course.courseDesc}</CardBody>
                <Container className='my-2'>
                    <Button color='danger' onClick={()=>{
                        deleteCourse(course.id)
                    }} className='mx-2' outline>Delete</Button>
                    <Button color='warning' className='mx-2' outline>Update</Button>
                </Container>
            </Card>
        </div>
    )
}
