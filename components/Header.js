import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => (
  <Navbar collapseOnSelect className="header" expand="lg" sticky="top">
    <Container>
    <Navbar.Brand href="/">Ravi Teja Kolla</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/photography">Photography</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header;
