import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import Moment from 'moment'
import { client, linkResolver, hrefResolver } from '../prismic-configuration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Container, Row, Col, Card, Button, Badge} from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../components/Layout'
import AboutMe from '../components/AboutMe'
import Subscribe from '../components/Subscribe'

const Home = props => (
    <Layout>
      <section className="aboutme-section">
      <Container className="pt-5 pb-5">
      <AboutMe />
      </Container>
      </section>
      <Container>
      <Row className="mt-5">
      <Container>
        <div className="pl-0">
        <h3>Recent Posts</h3>
        </div>
      </Container>
      {props.latestPosts.results.slice(0, 3).map(post => {
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
      })}
      </Row>
      <div className="mt-3">
      <Link href="/blog">
        <a>
          <Button variant="outline-dark">View all blog posts <FontAwesomeIcon icon="chevron-right" size="sm" /></Button>
        </a>
      </Link>
      </div>
      </Container>
      <Container className="projects-section">
      <Row className="mt-5">
      <Container>
        <h3>Projects</h3>
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
      </Container>
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
