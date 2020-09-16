import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

const AboutMe = () => (
  <div className="author card pt-4 pb-4 pl-5 pr-5 bg-white">
  <Row className="flex align-items-center justify-content-around flex-column-reverse flex-md-row">
    <Col md={8}>
      <div>
      <div>
        <h1>Hey, I’m Ravi.</h1>
      </div>
      <h2>Software Engineer</h2>
      <p>Experienced in developing full-stack web applications.</p>
      </div>
    </Col>
    <Col md={4} className="pb-3 pb-md-0">
      <Image className="author-pic m-auto" src="/ravitejakolla.png" alt="Ravi Teja" roundedCircle />
    </Col>
  </Row>
</div>
)

export default AboutMe;
