import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { Image, RichText, Date } from 'prismic-reactjs'
import Moment from 'moment'
import { client } from '../../prismic-configuration'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Post = props =>{
  const date = Date(props.post.data.date);
  const formattedDate = Moment(date).format("LL");
  return (
    <Layout>
    <Container className="mt-5">
      <Col className="mx-auto" md={8}>
      {RichText.render(props.post.data.title)}
      <small className="text-muted">{formattedDate}</small>
      <div className="mt-2 mb-3">
      <img src={props.post.data.image.url} alt={props.post.data.image.alt} />
      </div>
      <div>
      {RichText.render(props.post.data.post_body)}
      </div>
      </Col>
    </Container>
    </Layout>
  )
}

Post.getInitialProps = async context => {
  const { uid } = context.query
  const post = await client.getByUID('post', uid)
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { post }
}

export default Post
