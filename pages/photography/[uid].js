import React from 'react'
import Head from 'next/head'
import Prismic from 'prismic-javascript'
import { RichText, Date, Image } from 'prismic-reactjs'
import { client, linkResolver, hrefResolver } from '../../prismic-configuration'
import {Container, Row, Col, Card, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Social from '../../components/Social'

const Photo = props => (
    <Layout>
    <Head>
      <meta name="description" content={`${props.photo.data.image.alt} photo by Ravi Teja Kolla`} />
      <meta property="og:url"           content={`https://ravitejakolla.com/blog/${props.photo.uid}`} />
      <meta property="og:type"          content="website" />
      <meta property="og:title"         content={`${props.photo.data.image.alt}`} />
      <meta property="og:description"   content="Photography By Ravi Teja Kolla" />
      <meta property="og:image"         content={props.photo.data.image.url} />
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <script async src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0" charset="utf-8"></script>
      <script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
      <script type="IN/Share" data-url={`https://ravitejakolla.com/blog/${props.photo.uid}`}></script>
    </Head>
    <Container className="mt-5">
    <Breadcrumb>
      <Breadcrumb.Item href="/photography">Photography</Breadcrumb.Item>
      <Breadcrumb.Item active>{props.photo.data.image.alt}</Breadcrumb.Item>
    </Breadcrumb>
    <Row>
      <Col className="m-auto col-md-8">
        {RichText.render(props.photo.data.title)}
        <Row className="flex">
        <div className="col-lg-7">
          <small className="text-muted">{RichText.render(props.photo.data.photo_location)}</small>
        </div>
        <div className="col-lg-5">
        <Social dataText={props.photo.data.image.alt}
                dataUid={props.photo.uid}
                imageAlt={props.photo.data.image.alt}
        />
        </div>
        </Row>
        <Card className="mt-3">
          <Card.Img variant="top" src={props.photo.data.image.url} alt={props.photo.data.image.alt} />
        </Card>
        <Card.Body>
          <Card.Text>
            {RichText.render(props.photo.data.photo_body)}
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
