import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import './App.css';
import AddCourse from './Components/AddCourse';
import AllCourses from './Components/AllCourses';
import Header from './Components/Header';
import Home from './Components/Home';
import LeftMenus from './Components/LeftMenus';
//Video watched till 2:00:00
// const show = () => toast.error('Hello Toast Message', {
//   position: 'top-center'
// });
function App() {
  return (

    <div>
      <BrowserRouter>
      <Header />

      <Container>

        <Row>
          <Col md={4}>
            <LeftMenus />
          </Col>
          <Col md={8}>
            {/* <Home /> */}
            <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/addcourse' element={<AddCourse />} />
            <Route exact path='/courses' element={<AllCourses />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      </BrowserRouter>
    </div>

  );
}

export default App;
