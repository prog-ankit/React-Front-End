import React from 'react'

const UpdateCourse = () => {
  return (
    <div>
         <Container>
            <h2 className='text-center text-primary'>Fill Course Details</h2>
            <Form className='my-3'>
                <FormGroup>
                    <Label for="exampleId">Course Id</Label>
                    <Input type="number" name="u_cid" id="exampleId" placeholder="Course ID" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleName">Course Name</Label>
                    <Input type="text" name="u_cname" id="exampleName" placeholder="Course Name" />
                </FormGroup>
                
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" name="u_cdesc" id="description" style={{height: 150}} placeholder='Course Description here!!'/>
                </FormGroup>
                
                <br />
                <Container className="text-center">
                    <Button color='primary'  className="mx-2">Add Course</Button>
                    <Button color='danger'  className="mx-2">Clear Form</Button>
                </Container>
            </Form>
        </Container>
    </div>
  )
}

export default UpdateCourse
