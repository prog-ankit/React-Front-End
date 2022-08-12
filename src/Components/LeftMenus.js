import React from 'react'
import { Link } from "react-router-dom";
import { ListGroup } from 'reactstrap';
const LeftMenus = () => {
  return (
    <div>
       <ListGroup>
        <Link className='list-group-item list-group-action' to="/">Home</Link>
        <Link className='list-group-item list-group-action' to="/addcourse">Add Course</Link>
        <Link className='list-group-item list-group-action' to="/courses">View All Courses</Link>
        <Link className='list-group-item list-group-action' to="/courses">View Course</Link>
        <Link className='list-group-item list-group-action' to="#">About Us</Link>
      </ListGroup>
    </div>
  )
}

export default LeftMenus
