import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText, Date, Image } from 'prismic-reactjs'
import { client, linkResolver, hrefResolver } from '../../prismic-configuration'
import {Container, Row, Col, Card} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Photo = props => (
    <Layout>
    <Container>
    <Row>
      <Col className="mt-3">
        <Card>
          <Card.Img variant="top" src={props.photo.data.image.url} alt={props.photo.data.image.alt} />
        </Card>
        <Card.Body>
          <Card.Text>
            {RichText.render(props.photo.data.title)}
          </Card.Text>
        </Card.Body>
      </Col>
    </Row>
    </Container>
    </Layout>
)

Photo.getInitialProps = async context => {
  const { uid } = context.query
  const photo = await client.getByUID('photography',uid)
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { photo }
}

export default Photo
