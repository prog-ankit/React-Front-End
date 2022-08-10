// import logo from './logo.svg';
import { toast, ToastContainer } from 'react-toastify';
import { Button,Container } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
//Video watched till 1:04:00
const show = () => toast('Hello Toast Message')
function App() {
  return (
    <Container>
      <h1>Sample Applicaiton</h1>
    <p><Button color='primary' onClick={show}>Hello this is the button using Reactstrap</Button></p>
    <p><button className='btn btn-primary' onClick={show}>Hello, this is button using bootstrap</button></p>
    <ToastContainer position='bottom-left' pauseOnHover/>
    </Container>
    );
}

export default App;
