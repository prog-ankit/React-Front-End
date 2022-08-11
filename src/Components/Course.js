import React, { useState } from 'react'
// import confirm from 'reactstrap-confirm'
import {
    Card, CardBody, CardSubtitle, Button, Container
} from 'reactstrap';

export default function Course({ course }) {
    // const [confirmed, setConfirmed] = useState(false);

    const basicDialog = async () => {

       let result = window.confirm("Are you sure you want to delete the course?");
    //    console.log(result);
    // if(result ==true)
    //     // console.log(result);
    //     // setConfirmed(result);
    // 
    };

    return (
        <div>
            <Card className='text-center my-2 p-3'>

                <CardSubtitle><b>{course.title}</b></CardSubtitle>
                <CardBody>{course.description}</CardBody>
                <Container className='my-2'>
                    <Button color='danger' onClick={basicDialog} className='mx-2' outline>Delete</Button>
                    <Button color='warning' className='mx-2' outline>Update</Button>
                </Container>
            </Card>
        </div>
    )
}
