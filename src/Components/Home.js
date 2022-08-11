import React from 'react'
import { useEffect } from 'react';
import { Button,Container } from "reactstrap";
// import addCourse from './AddCourse';
export default function Home() {
    useEffect(()=>{
        document.title = "CourseKaro || Home"
    },[])
    return (
        <div>
            <div className="jumbotron text-center bg-light my-2">
                <h1 className="display-5"><b>Learn Code with Ankit Bose!</b></h1>
                <p className="lead">This is a sample application build using React JS as front-end and Springboot as backend.</p>
                <Container>
                <Button color='primary' outline>Let's Go</Button>
               </Container>
                <hr className="my-4"/>
              
            </div>
        </div>
    )
}
