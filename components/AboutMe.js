import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

const AboutMe = () => (
  <div className="mt-5">
  <Row>
    <Col xs={12} md={8}>
      <div>
      <div>
        <h1>Hey, I’m Ravi.</h1>
      </div>
      <h5>Software Engineer</h5>
      <p>Experienced in developing full-stack web applications.</p>
      </div>
    </Col>
    <Col xs={12} md={4} lg={3}>
      <Image className="author-pic" src="/ravitejakolla.jpg" rounded />
    </Col>
  </Row>
</div>
)

export default AboutMe;
