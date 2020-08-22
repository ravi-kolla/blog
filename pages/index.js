import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import Moment from 'moment'
import { client, linkResolver, hrefResolver } from '../prismic-configuration'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../components/Layout'
import AboutMe from '../components/AboutMe'

const Home = props => (
    <Layout>
      <div>
        <AboutMe />
      </div>
      <Row className="mt-5">
      <Container>
        <h5>Latest Blog Posts</h5>
      </Container>
      {props.latestPosts.results.slice(0, 2).map(post => {
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
      })}
      <Col md={4} className="d-flex mt-3 align-items-end">
        <Link href="/blog">
          <a>
            <Button variant="primary">View More posts</Button>
          </a>
        </Link>
      </Col>
      </Row>
      <Row className="mt-5">
      <Container>
        <h5>Projects</h5>
      </Container>
      {props.projects.results.map(project => (
        <Col key={project.uid} md={6} lg={4} className="mt-3">
          <Card>
            <Card.Img src={project.data.image.url} alt={project.data.image.alt} />
            <Card.Body>
              <Card.Text>
                {RichText.render(project.data.title)}
              </Card.Text>
              <Card.Text>
                {RichText.render(project.data.description)}
              </Card.Text>
              <Card.Text>
                {RichText.render(project.data.cta)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
    </Layout>
)

Home.getInitialProps = async context => {
  const latestPosts = await client.query(
    Prismic.Predicates.at('document.type', 'post'),
    { orderings: '[my.post.date desc]' }
  )
  const projects = await client.query(
    Prismic.Predicates.at('document.type', 'projects'),
    { orderings: '[my.projects.date desc]' }
  )

  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { projects, latestPosts }
}

export default Home
