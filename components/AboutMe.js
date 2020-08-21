import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

const AboutMe = () => (
  <Container className="mt-5">
  <Row>
    <Col xs={12} md={8}>
      <Container>
      <div>
        <h1>Hey, I’m Ravi.</h1>
      </div>
      <h5>Software Engineer</h5>
      <p>Experienced in developing full-stack web applications.</p>
      </Container>
    </Col>
    <Col xs={12} md={4} lg={3}>
      <Image src="/ravitejakolla.jpeg" rounded />
    </Col>
  </Row>
</Container>
)

export default AboutMe;
