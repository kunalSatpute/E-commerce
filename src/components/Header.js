import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* <Navbar bg="primary" data-bs-theme="dark">
          <Navbar.Brand className="ms-4">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            <Link to="/">home</Link>
            <Link to="/add">add Product </Link>
            <Link to="/update">update Product </Link>
            <Link to="/login">login </Link>
            <Link to="/register">register </Link>
          </Nav>
      </Navbar> */}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid className="me-5">
          <Navbar.Brand className="ms-3">E-commerce</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/add">Add Product</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/update">Update Product</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
