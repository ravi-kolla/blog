import React from 'react'
import { Col, Row, Jumbotron, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/Layout'
import Subscribe from '../components/Subscribe'
import SocialConnectIcons from '../components/SocialConnectIcons'

const Connect = () => (
  <Layout>
    <Container className="mt-5">
    <Col md={6} className="m-auto">
    <Jumbotron>
      <h3>Lets connect!</h3>
      <p>
        I would love to hear from you.
      </p>
      <Container className="mb-3">
        <SocialConnectIcons />
      </Container>
      <Container>
        <Row>
          <Subscribe />
        </Row>
      </Container>
    </Jumbotron>
    </Col>
    </Container>
  </Layout>
)

export default Connect;
