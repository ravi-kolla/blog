import React from 'react'
import { Col, Row, Jumbotron, Container } from 'react-bootstrap'
import Layout from '../components/Layout'

const Connect = () => (
  <Layout>
    <Container className="mt-5">
    <Col md={6} className="m-auto">
    <Jumbotron>
      <h3>Lets connect!</h3>
      <p>
        I would love to hear from you.
      </p>
      <Container>
        <Row>
          <p>
          <a href="https://www.linkedin.com/in/ravitejakolla">LinkedIn</a> / <a href="https://github.com/ravi-kolla">GitHub</a> / Email: <a href="mailto:ravi.kolla@outlook.com">ravi.kolla@outlook.com</a>
          </p>
        </Row>
      </Container>
    </Jumbotron>
    </Col>
    </Container>
  </Layout>
)

export default Connect;
