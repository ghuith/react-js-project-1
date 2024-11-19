import './App.css';
import "./styles.css"
import logo from"./assets/img logo .jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <h1>Products watches</h1>
      <div> <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">products</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>


    <div className='cardslist'>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://ianknaggs.com/wp-content/uploads/2020/03/Watch-Photography-NYIncredibles-Front-View-Ian-Knaggs.jpg" />
      <Card.Body>
        <Card.Title>watches 1</Card.Title>
        <Card.Text>
          price 200$
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


     
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://ianknaggs.com/wp-content/uploads/2020/03/Watch-Photography-Black-Front-View-Ian-Knaggs.jpg" />
      <Card.Body>
        <Card.Title>watches 2</Card.Title>
        <Card.Text>
          price 100$
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkhs7u7yJ4_E0wnswUHsJVrzeSJZHW6SQnmRvbe3F3cbRy3X7Fnpkf0MVoESUpBzl3DU&usqp=CAU" />
      <Card.Body>
        <Card.Title>watches 3</Card.Title>
        <Card.Text>
          price 300$
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

      </div>


      </div>
      
     
    
    

    
  );
}

export default App;
