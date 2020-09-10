import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText, Date, Image } from 'prismic-reactjs'
import { client, linkResolver, hrefResolver } from '../../prismic-configuration'
import {Row, Col, Card, Container} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Album = props => (
    <Layout>
    <Container>
    <Row>
    {props.photos.results.map(photography => (
      <Col key={photography.uid} md={6} lg={4} className="mt-3">
        <Link href={hrefResolver(photography)} as={linkResolver(photography)} passHref>
        <a>
        <Card>
          <Card.Img src={photography.data.image.url} alt={photography.data.image.alt} />
        </Card>
        </a>
        </Link>
      </Col>
    ))}
    </Row>
    </Container>
    </Layout>
)

Album.getInitialProps = async context => {
  const photos = await client.query(
    Prismic.Predicates.at('document.type', 'photography'),
    { orderings: '[my.photography.date desc]' }
  )
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { photos }
}

export default Album
