import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Subscribe from './Subscribe'

const Footer = () => (
  <div className="footer mt-5">
  <Container className="pt-5 pb-3 pl-3 pr-3">
  <Row className="">
    <Col md>
    <div>
      <h5>Ravi Teja Kolla</h5>
    </div>
    </Col>
    <Col md>
    <Subscribe />
    </Col>
    <Col md>
    <div>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    </div>
    <div>
    <Link href="/photography">
      <a>Photography</a>
    </Link>
    </div>
    <div>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
    </div>
    </Col>
  </Row>
  <Row>
  <div class="col-md-4 offset-md-8">
  <small>Copyright © 2020 Ravi Teja Kolla</small>
  </div>
  </Row>
  </Container>
  </div>
)

export default Footer;
