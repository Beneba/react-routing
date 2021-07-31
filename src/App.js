import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Services">Services</Link>
          </Nav>
        </Container>
      </Navbar>

      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
    </Router>
  );
}

export default App;
