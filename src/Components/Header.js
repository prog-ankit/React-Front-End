import React from 'react'
import { Card, CardBody } from 'reactstrap'

const Header = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card className='text-center my-1 bg-primary text-light' style={{ width: "82%" }}>
        <CardBody><h1>Welcome to CourseKaro Application</h1></CardBody>
      </Card>
    </div>
  )
}

export default Header
