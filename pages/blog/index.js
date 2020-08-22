import React from 'react'
import Prismic from 'prismic-javascript'
import { Image, RichText, Date } from 'prismic-reactjs'
import {Row, Col, Card} from 'react-bootstrap'
import Moment from 'moment'
import { client, linkResolver, hrefResolver } from '../../prismic-configuration'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Album from '../photography'

const Blog = props => (
    <Layout>
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
                  <small className="text-muted">{formattedDate}</small>
                  <h6>
                  {post.data.image.alt}
                  </h6>
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
