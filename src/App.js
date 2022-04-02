import Header from './components/Header'
// import Card from './components/Card'
// import Middle from './components/Middle'
import { Task } from './components/Task'
import Tasks from './components/Tasks'
import { Button } from './components/Button'
import Inputbox from './components/Inputbox'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Card, NavDropdown } from 'react-bootstrap'
import Midtext from './components/Midtext'
import logo1 from './images/log1.png'



function App() {
  const onClick = () => {
    console.log('click')
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              // alt=""
              src={logo1}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'  '}
            IT Support Application
          </Navbar.Brand>
          <NavDropdown title="More about us" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2"></NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3"></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Container>

      </Navbar>
      <div className='bar'>
        <Header title='Chat Here' />
      </div>

      {/* <Task tasks={tasks}/> */}
      <div className='mid'>
        <Tasks />
        <Midtext />
      </div>

      <div className='box'>
        <div className='inner'>
          <Inputbox />
          <Button color='lightblue' text='Send Queries' onClick={onClick} />
        </div>
      </div>
      <div>
        <Card className="text-center">
          <Card.Header className='ft'>Featured</Card.Header>
          <Card.Body>
            <div className='ftrmid'>
              <Card.Title>
                fyp material
              </Card.Title>
              <Card.Text>
                chatbot using prolog
              </Card.Text>
            </div>

          </Card.Body>
          <Card.Footer style={{ backgroundColor: 'grey', }} className="text-muted">CopyRights</Card.Footer>
        </Card>
      </div>


    </div>
  );
}

export default App;
