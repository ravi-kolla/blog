import React from 'react'
import { Container, Col, Breadcrumb } from 'react-bootstrap'
import { Image, RichText, Date } from 'prismic-reactjs'
import { client } from '../../prismic-configuration'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Wishes = props =>{
  return (
    <Layout>
    <Container className="mt-5">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{RichText.render(props.wishes.data.title)}</Breadcrumb.Item>
      </Breadcrumb>
      <Col className="mx-auto" md={8}>
      {RichText.render(props.wishes.data.title)}
      <div className="mt-2 mb-3">
      <img src={props.wishes.data.image.url} alt={props.wishes.data.image.alt} />
      </div>
      <div>
      {RichText.render(props.wishes.data.body)}
      </div>
      </Col>
    </Container>
    </Layout>
  )
}

Wishes.getInitialProps = async context => {
  const { uid } = context.query
  const wishes = await client.getByUID('wishes', uid)
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { wishes }
}

export default Wishes
