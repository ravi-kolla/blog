import React from 'react'
import Head from 'next/head'
import Prismic from 'prismic-javascript'
import { Image, RichText, Date } from 'prismic-reactjs'
import {Container, Row, Col, Card, Breadcrumb, Badge} from 'react-bootstrap'
import Moment from 'moment'
import { client, linkResolver, hrefResolver } from '../../prismic-configuration'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Subscribe from '../../components/Subscribe'
import Album from '../photography'

const Blog = props => (
    <Layout>
    <Head>
      <title>Ravi Teja Kolla Blog</title>
      <meta name="title" content="Ravi Teja Kolla Blog" />
      <meta name="description" content="This blog is managed by Ravi Teja" />
      <meta name="keywords" content="Raviteja Blog, Ravi Teja Kolla Blog, Blog by Ravi Teja" />
    </Head>
    <Container>
    <Breadcrumb className="blog-page mt-5">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>Blog</Breadcrumb.Item>
    </Breadcrumb>
    <Row className="mt-2">
    {props.posts.results.map(post => {
      const date = Date(post.data.date);
      const formattedDate = Moment(date).format("LL");
      return (
        <Col key={post.uid} md={6} lg={4} className="mt-3">
          <Card className="blog-card">
            <Link href={hrefResolver(post)} as={linkResolver(post)} passHref>
            <a>
              <Card.Img className="blog-image" variant="top" src={post.data.image.url} alt={post.data.image.alt} />
              <Card.Body>
                <Card.Text>
                  <small>{formattedDate}</small>
                  <p className="card-title">
                  {post.data.image.alt}
                  </p>
                  <p>
                  {post.tags.map(tag => {
                    return (
                      <Badge className="mr-1" key={tag} pill variant="success">{tag}</Badge>
                    );
                  })}
                  </p>
                  {RichText.render(post.data.description)}
                </Card.Text>
              </Card.Body>
            </a>
            </Link>
          </Card>
        </Col>
      )
    }
    )}
    </Row>
    </Container>
    </Layout>
)

Blog.getInitialProps = async context => {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'post'),
    { orderings: '[my.post.date desc]' }
  )
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { posts }
}

export default Blog
